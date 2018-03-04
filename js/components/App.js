import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import keydown from 'react-keydown';

// Components
import Options from './Options';
import SkinBase from './SkinBase';
import Export from './Export';
import Credit from './Credit';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyDown: false
        };
    }

    @keydown('ctrl+z')
    undo(e) {
        this.props.undo(e);
    }

    @keydown('ctrl+y')
    redo(e) {
        this.props.redo(e);
    }

    @keydown('delete')
    deleteShape(e) {
        this.props.deleteShape(e);
    }

    render() {
        return (
            <div tabIndex="0" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} style={{height: '100%'}}>
                <Options />
                <SkinBase />
                <Export />
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
        undo: e => {
            dispatch(ActionCreators.undo());
        },
        redo: e => {
            dispatch(ActionCreators.redo());
        },
        deleteShape: e => {
            dispatch({type: 'DELETE_SELECTED_SHAPE'});
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
