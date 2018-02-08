import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';

// Components
import Options from './Options';
import SkinBase from './SkinBase';
import Credit from './Credit';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyDown: false
        };
    }

    onKeyDown = e => {
        if (!this.state.keyDown && e.keyCode!=17) {
            this.setState({
                keyDown: true
            });

            this.props.onKeyDown(e);
        }
    }
    onKeyUp = e => {
        this.setState({
            keyDown: false
        });
    }

    render() {
        return (
            <div tabIndex="0" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} style={{height: '100%'}}>
                <Options />
                <SkinBase />
                <Credit />
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    return {};
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onKeyDown: e => {
            if (e.ctrlKey && e.key === 'z') {
                dispatch(ActionCreators.undo());
            }
            if (e.ctrlKey && e.key === 'y') {
                dispatch(ActionCreators.redo());
            }

            // delete key
            if (e.keyCode === 46) {
                dispatch({type: 'DELETE_SELECTED_SHAPE'});
            }
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
