import React from 'react';
import { connect } from 'react-redux';

import AddShape from './AddShape';
import ColorPicker from './ColorPicker';
import LayerButtons from './LayerButtons';
import AllInputs from './AllInputs';

class Options extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: this.props.shape ? this.props.shape.scale : 1
        };
    }

    componentWillReceiveProps = newProps => {
        this.setState({
            scale: newProps.shape && newProps.shape.scale
        });
    }

    render() {
        var selected = this.props.shape;
        return(
            <div className="options-panel"
                onMouseEnter={this.props.disableTopLayer}
                onMouseLeave={this.props.enableTopLayer}
            >
                <h1 className="shape-name">{selected ? selected.name : 'Base'}</h1>
                {
                    selected &&
                    <LayerButtons
                        up={this.props.moveShapeUp}
                        down={this.props.moveShapeDown}
                        upDisabled={this.props.upDisabled}
                        downDisabled={this.props.downDisabled}
                    />
                }
                <ColorPicker />
                {
                    this.props.shape &&
                    <AllInputs />
                }

                <AddShape />
            </div>
        );
    }
}

function round(x) {
    return Math.round(x*100)/100;
}

var mapStateToProps = (state, props) => {
    var shapes = state.shapes.present;

    var shapeIndex = shapes.map(shape => shape.selected).indexOf(true);
    var shape = shapes[shapeIndex];
    return {
        shape,
        shapeIndex,
        upDisabled: shapeIndex == shapes.length-1,
        downDisabled: shapeIndex == 0
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onScaleChange: (scale, shape) => {
            if (scale) {
                dispatch({
                    type: 'CHANGE_SHAPE_TRANSLATION',
                    scale
                });
            }
        },

        moveShapeUp: () => {
            dispatch({type: 'SELECTED_SHAPE_UP'});
        },
        moveShapeDown: () => {
            dispatch({type: 'SELECTED_SHAPE_DOWN'});
        },

        enableTopLayer: () => {
            dispatch({
                type: 'TOP_LAYER',
                value: true
            });
        },
        disableTopLayer: () => {
            dispatch({
                type: 'TOP_LAYER',
                value: false
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Options);
