import React from 'react';
import { connect } from 'react-redux';
import keydown from 'react-keydown';

class MoveableShape extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rect: null,
            moving: false,
            ...this.props.shape
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            ...newProps
        });
    }

    render() {
        var scaleFactor = 700/30;

        var selected = this.props.shape.selected;
        var topLayer = selected && this.props.topLayer;

        return (
            <div className={"shape" + (selected?" selected":"") + (topLayer?" top":"")}
                onMouseDown={e => {
                    e.stopPropagation();
                    if (!this.props.shape.selected && !e.ctrlKey) this.props.onClick();
                }}
                style={{
                    transform: `
                        translate(`+this.state.position.x+`px,`+this.state.position.y+`px)
                        translate(-50%,-50%)
                        scale(`+this.state.scale+`)
                        rotate(`+this.state.rotation+`deg)
                        translateX(`+(this.state.hf?-1:1)*(this.state.rect?(this.state.rect.width/2 - this.props.origin.x):'0')+`px)
                        translateY(`+(this.state.vf?-1:1)*(this.state.rect?(this.state.rect.height/2 - this.props.origin.y):'0')+`px)
                    `
                }}
                ref={shape=>{
                    if (shape && !this.state.rect) {
                        var rect = shape.getBoundingClientRect();
                        rect = {
                            x: rect.x * this.props.zoom,
                            y: rect.y * this.props.zoom,
                            width: rect.width / this.props.zoom,
                            height: rect.height / this.props.zoom,
                        };
                        this.setState({ rect });
                    }
                }}
            >
                <span className={(this.state.hf?'hf':'')+' '+(this.state.vf?'vf':'')} onMouseDown={e=>this.props.onShapeDown(e,this)} dangerouslySetInnerHTML={{__html: this.props.shapeHTML}}></span>
                {
                    this.props.shape.selected &&
                    <div className="dragger"
                        style={{
                            opacity: this.state.moving ? 0 : 1
                        }}
                        onMouseDown={e=>this.props.onDraggerDown(e,this)}
                    ></div>
                }
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    var shapeHTML = state.allShapes[props.shape.shapeID].replace(/fill\=\".+?\"/g, 'fill="#'+(props.shape.color || '000')+'"');
    var confusingOffsetRegex = shapeHTML.match(/matrix\((1\.0|1),\s*(0\.0|0),\s*(0\.0|0),\s*(1\.0|1),\s*(.+),\s*(.+)\)/);

    return {
        shapeHTML,
        ...props.shape,
        origin: {
            x: parseFloat(confusingOffsetRegex[5])+2,
            y: parseFloat(confusingOffsetRegex[6])+2
        },
        topLayer: state.topLayer
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: e => {
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
