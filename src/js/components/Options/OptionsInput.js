import React from 'react';
import { connect } from 'react-redux';

class OptionsInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Get the correct value for the input box
            data: getKey(this.props.shape, this.props.type)
        };
    }

    componentWillReceiveProps = newProps => {
        this.setState({
            data: newProps.shape && getKey(newProps.shape, this.props.type)
        });
    }
    
    onChange = e => {
        this.setState({
            data: e.target.value
        });
        this.props.onChange(e.target.value, this.props.shape);
    }

    render() {
        var label;
        if (this.props.type === 'scale') label = 'Scale: ';
        if (this.props.type === 'rotation') label = 'Angle: ';
        if (this.props.type === 'position.x') label = 'X Pos: ';
        if (this.props.type === 'position.y') label = 'Y Pos: ';

        return (
            <label className="options-input">
                <div className="title">{label}</div>
                <input 
                    onChange={this.onChange}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    value={this.state.data}
                    type="text"
                />
            </label>
        );
    }
}

// Used to get the correct property from the key string
function getKey(shape, type) {
    if (type === 'position.x') {
        return shape.position.x;
    } else if (type === 'position.y') {
        return shape.position.y;
    } else {
        return shape[type];
    }
}

var mapStateToProps = (state, props) => {
    var shape = state.shapes.present.filter(shape => shape.selected)[0];
    return {
        shape
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onChange: (data, shape) => {
            if (data) {
                if (props.type === 'position.x') {
                    return dispatch({
                        type: 'CHANGE_SHAPE_TRANSLATION',
                        position: {
                            x: data,
                            y: shape.position.y
                        }
                    });
                }
                if (props.type === 'position.y') {
                    return dispatch({
                        type: 'CHANGE_SHAPE_TRANSLATION',
                        position: {
                            x: shape.position.x,
                            y: data
                        }
                    });
                }
                dispatch({
                    type: 'CHANGE_SHAPE_TRANSLATION',
                    [props.type]: data
                });
            }
        },

        onFocus: () => {
            dispatch({
                type: 'SET_FOCUS',
                focus: true
            });
        },
        onBlur: () => {
            dispatch({
                type: 'SET_FOCUS',
                focus: false
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionsInput);
