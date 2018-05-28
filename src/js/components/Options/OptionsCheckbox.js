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
        return (
            <label className="options-checkbox">
                <div className="title">
                    {(()=> {
                        switch (this.props.type) {
                            case 'hf': return 'H Flip: ';
                            case 'vf': return 'V Flip: ';
                        }
                    })()}
                </div>
                <div className={'checkbox' + (this.state.ticked ? ' ticked' : '')} onClick={this.onChange} />
            </label>
        );
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
        onChange: ticked => {
            dispatch({
                type: 'CHANGE_SHAPE_TRANSLATION',
                [props.type]: ticked
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionsCheckbox);
