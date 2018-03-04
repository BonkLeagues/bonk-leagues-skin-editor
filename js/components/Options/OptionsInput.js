import React from 'react';
import { connect } from 'react-redux';

class OptionsInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: getKey(this.props.shape, this.props.type)
        };
    }

    componentWillReceiveProps = newProps => {
        this.setState({
            data: newProps.shape && getKey(newProps.shape, this.props.type)
        });
    }

    render() {
        return (
            <label className="options-input">
                <div className="title">
                    {(()=> {
                        switch (this.props.type) {
                            case 'scale': return 'Scale: ';
                            case 'rotation': return 'Angle: ';
                            case 'position.x': return 'X Pos: ';
                            case 'position.y': return 'Y Pos: ';
                        }
                    })()}
                </div>
                <input onChange={e=>{
                    this.setState({
                        data: e.target.value
                    });
                    this.props.onChange(e.target.value, this.props.shape);
                }} value={this.state.data} type="text" />
            </label>
        );
    }
}

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
    return shape ? {
        shape
    } : {};
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
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionsInput);
