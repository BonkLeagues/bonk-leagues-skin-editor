import React from 'react';
import { connect } from 'react-redux';

class MoveableShape extends React.Component {
    constructor(props) {
        super(props);

        // Copy all the shape's properties into the state
        this.state = this.props.shape;
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps);
    }

    render() {
        var { selected, visible, locked } = this.props.shape;

        // Determines whether the shape should be displayed on top
        var topLayer = selected && this.props.topLayer;

        // Calculate the multipliers used for flipping a shape
        var hfMultiplier = this.state.hf ? -1 : 1;
        var vfMultiplier = this.state.vf ? -1 : 1;

        // Creates the class name to flip the shape
        // (the CSS can't be accessed directly as the SVG needs to be flipped)
        var flipClassName = (this.state.hf ? 'hf' : '') + ' ' + (this.state.vf ? 'vf' : '');

        // Calculate offsets
        var offsetX = this.state.rect ? (this.state.rect.width / 2 - this.props.origin.x) : 0;
        var offsetY = this.state.rect ? (this.state.rect.height / 2 - this.props.origin.y) : 0;

        // CSS transforms for position, scale and rotation
        var transformString = `
            translate(` + this.state.position.x + `px,` + this.state.position.y + `px)
            translate(-50%, -50%)
            scale(` + this.state.scale + `)
            rotate(` + this.state.rotation + `deg)
            translateX(` + hfMultiplier * offsetX + `px)
            translateY(` + vfMultiplier * offsetY + `px)
        `;

        return (
            <div className={"shape" + (selected ? " selected" : "") + (topLayer ? " top" : "")}
                style={{
                    display: visible ? 'block' : 'none',
                    transform: transformString
                }}
                onMouseDown={e => {
                    e.stopPropagation();

                    // If the shape isn't already selected, the left mouse button is pressed,
                    // and the shape isn't locked, select it
                    if (!this.props.shape.selected && e.button === 0 && !locked) {
                        this.props.onClick();
                    }
                }}
                ref={shape => {
                    // If no bounding rectangle has been calculated, calculate it
                    if (shape && !this.state.rect) {
                        var rect = shape.getBoundingClientRect();

                        // Account for zoom
                        rect = {
                            x: rect.x * this.props.zoom,
                            y: rect.y * this.props.zoom,
                            width: rect.width / this.props.zoom,
                            height: rect.height / this.props.zoom,
                        };

                        this.setState({ rect });
                        this.props.updateRect(rect);
                    }
                }}
            >
                {
                    // If the component has children, put them into the span
                    this.props.children ? (
                        <span className={flipClassName}
                            onMouseDown={e => this.props.onShapeDown(e, this)}
                        >
                            {this.props.children}
                        </span>
                    ) : (
                        <span className={flipClassName}
                            onMouseDown={e => this.props.onShapeDown(e, this)}
                            dangerouslySetInnerHTML={{__html: this.props.shapeHTML}}
                        ></span>
                    )
                }
                {
                    this.props.shape.selected &&
                    <div className="dragger"
                        style={{
                            opacity: this.state.moving ? 0 : 1
                        }}
                        onMouseDown={e => this.props.onDraggerDown(e, this)}
                    ></div>
                }
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    if (props.children) {
        return {
            overlay: true,

            shape: {
                selected: state.overlay.present.selected,
                visible: true,
                locked: false,

                position: {
                    x: state.overlay.present.position.x,
                    y: state.overlay.present.position.y
                }
            },

            origin: {
                x: 0, y: 0
            },

            position: {
                x: state.overlay.present.position.x,
                y: state.overlay.present.position.y
            },
            rotation: state.overlay.present.rotation,
            scale: state.overlay.present.scale
        };
    }

    var shapeColor = props.shape.color;

    if (props.shape.previewColorEnabled) {
        shapeColor = props.shape.previewColor || props.shape.color;
    }

    // Get the HTML needed to display the shape's SVG
    var shapeHTML =
        state.allShapes[props.shape.shapeID]
        .replace(/fill\=\".+?\"/g, 'fill="#' + shapeColor + '"');

    // This monster is used to get the offset from the SVG
    var confusingOffsetRegex = shapeHTML.match(/matrix\((1\.0|1),\s*(0\.0|0),\s*(0\.0|0),\s*(1\.0|1),\s*(.+),\s*(.+)\)/);

    return {
        shapeHTML,
        ...props.shape,

        // Calculate where the origin of the shape is (the pivot point)
        origin: {
            x: parseFloat(confusingOffsetRegex[5]) + 2,
            y: parseFloat(confusingOffsetRegex[6]) + 2
        },

        topLayer: state.topLayer
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        updateRect: rect => {
            // Sets the UUID if the object is a shape
            var uuid = props.shape ? props.shape.uuid : null;

            dispatch({
                type: 'UPDATE_RECT',
                id: uuid,
                rect
            });
        },

        onClick: () => {
            // If it's an overlay, don't select it
            if (!props.shape) return;

            dispatch({type: 'DESELECT_ALL'});
            dispatch({
                type: 'SELECT_SHAPE',
                id: props.shape.uuid
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoveableShape);
