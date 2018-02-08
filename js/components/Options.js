import React from 'react';
import { connect } from 'react-redux';

import Color from './Color';
import AddShape from './AddShape';
import OptionsInput from './OptionsInput';

import colors from '../modules/colors';

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
        return(
            <div className="options-panel">
                <h1 className="shape-name">{this.props.shape ? this.props.shape.name : 'Base'}</h1>
                <div className="color-picker">
                    {colors.map((color, i) =>
                        <Color color={color} key={i} />
                    )}
                </div>
                {
                    this.props.shape &&
                    <div>
                        <OptionsInput type="scale" />
                        <OptionsInput type="rotation" />
                        <OptionsInput type="position.x" />
                        <OptionsInput type="position.y" />
                    </div>
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
    var shape = state.shapes.present.filter(shape => shape.selected)[0];
    return {
        shape
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
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Options);
