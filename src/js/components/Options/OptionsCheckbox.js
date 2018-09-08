import React from 'react';
import { connect } from 'react-redux';

class OptionsCheckbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ticked: this.props.shape[this.props.type]
        };
    }

    componentWillReceiveProps = newProps => {
        this.setState({
            ticked: newProps.shape && newProps.shape[this.props.type]
        });
    }

    onChange = () => {
        this.setState({
            ticked: !this.state.ticked
        });
        this.props.onChange(!this.state.ticked);
    }

    render() {
        var label;
        if (this.props.type === 'hf') label = 'H Flip: ';
        if (this.props.type === 'vf') label = 'V Flip: ';

        return (
            <label className="options-checkbox">
                <div className="title">{label}</div>

                <div className={'checkbox' + (this.state.ticked ? ' ticked' : '')}
                    onClick={this.onChange}
                />
            </label>
        );
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
        onChange: ticked => {
            dispatch({
                type: 'CHANGE_SHAPE_TRANSLATION',

                // Sets the correct property to the value of the checkbox using ES6 magic
                [props.type]: ticked
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionsCheckbox);
