import React from 'react';
import { connect } from 'react-redux';

import ShapeIcon from '../ShapeIcon';

// Ripped out from the Skin Manager and slightly changed
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
    selectShape = () => {
        this.props.selectShape(this.props.shape.uuid);
    }

    render() {
        var { shape } = this.props;
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

                <div className="buttons">
                    <div className="button">
                        <img src={require('./icons/visible.svg')} draggable="false" />
                    </div>
                    <div className="spacer"></div>
                    <div className="button">
                        <img src={require('./icons/unlocked.svg')} draggable="false" />
                    </div>
                </div>
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
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layer);