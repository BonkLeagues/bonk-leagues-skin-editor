import React from 'react';
import { connect } from 'react-redux';

import ShapeIcon from '../ShapeIcon';

// Ripped out from the Skin Manager and slightly changed
// Either outputs a dark or light colour depending on the colour of the shape
function darkLightHex(c) {
    var rgb = parseInt(c, 16);
    var r = (rgb >> 16) & 0xff;
    var g = (rgb >> 8) & 0xff;
    var b = (rgb >> 0) & 0xff;
    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (luma < 70) {
        return '#ccc';
    } else {
        return '#303030';
    }
}

class Layer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            locked: false
        };
    }

    // Selects the shape when you click the layer
    selectShape = () => {
        this.props.selectShape(this.props.shape.uuid);
    }

    toggleVisible = () => {
        this.setState({
            visible: !this.state.visible
        });

        this.props.toggleVisible(this.props.shape.uuid);
    }
    toggleLock = () => {
        this.setState({
            locked: !this.state.locked
        });

        this.props.toggleLock(this.props.shape.uuid);
    }

    render() {
        var { shape } = this.props;
        var { visible, locked } = this.state;

        // Used for picking the right icon to display
        var visibleIcon = visible ? 'visible' : 'invisible';
        var lockIcon = locked ? 'locked' : 'unlocked';

        return (
            <div className={'layer' + (shape.selected ? ' selected' : '')}
                onClick={this.selectShape}
            >
                <div className="layer-shape" style={{background: darkLightHex(shape.color)}}>
                    <ShapeIcon
                        shape={this.props.allShapes[shape.shapeID]}
                        color={shape.color}
                        size={40}
                    />
                </div>

                <h2>{shape.name}</h2>

                {
                    // Displays the buttons if the shape is selected
                    shape.selected &&
                    <div className="buttons">
                        <div className="button" onClick={this.toggleVisible}>
                            <img src={require('./icons/'+visibleIcon+'.svg')} draggable="false" />
                        </div>
                        <div className="spacer"></div>
                        <div className="button" onClick={this.toggleLock}>
                            <img src={require('./icons/'+lockIcon+'.svg')} draggable="false" />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    return {
        allShapes: state.allShapes
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        selectShape: id => {
            dispatch({
                type: 'SELECT_SHAPE',
                id
            });
        },

        toggleVisible: id => {
            dispatch({
                type: 'TOGGLE_VISIBLE',
                id
            });
        },
        toggleLock: id => {
            dispatch({
                type: 'TOGGLE_LOCK',
                id
            });
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layer);