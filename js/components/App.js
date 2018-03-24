import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import keydown from 'react-keydown';

// Components
import Options from './Options';
import SkinBase from './SkinBase';
import Export from './Export';
import Credit from './Credit';

import copyToClipboard from '../actions/copyToClipboard';
import pasteFromClipboard from '../actions/pasteFromClipboard';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyDown: false,
            dropzone: false
        };
    }

    @keydown('ctrl+z')
    undo() {
        if (this.props.shortcutsActive) this.props.undo();
    }
    @keydown('ctrl+y')
    redo() {
        if (this.props.shortcutsActive) this.props.redo();
    }
    @keydown('ctrl+c')
    copyShape() {
        if (this.props.shortcutsActive) this.props.copyShape();
    }
    @keydown('ctrl+v')
    pasteShape() {
        if (this.props.shortcutsActive) this.props.pasteShape();
    }
    @keydown('delete')
    deleteShape() {
        if (this.props.shortcutsActive) this.props.deleteShape();
    }

    onFileDrop = files => {
        if (files.length > 1) return;

        var file = files[0];
        window.URL.revokeObjectURL(file.preview);

        var reader = new FileReader();
        reader.onload = () => {
            this.props.changeOverlaySrc(reader.result);
        };
        reader.readAsDataURL(file);

        this.setState({
            dropzone: false
        });
    }
    enableDropzone = () => {
        this.setState({
            dropzone: true
        });
    }
    disableDropzone = () => {
        this.setState({
            dropzone: false
        });
    }

    render() {
        return (
            <Dropzone
                disableClick
                disablePreview
                accept="image/*"
                style={{
                    height: '100%',
                    position: 'relative'
                }}
                onDropAccepted={this.onFileDrop}
                onDropRejected={this.disableDropzone}
                onDragEnter={this.enableDropzone}
                onDragLeave={this.disableDropzone}
            >
                <div className="dropzone-panel" style={{opacity: this.state.dropzone ? 1 : 0}}>
                    <div>
                        <h1>DROP YOUR OVERLAY IMAGE</h1>
                        <h2>When you drop an image, it will be overlayed on the skin for you to copy!</h2>
                    </div>
                </div>
                <div tabIndex="0" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} style={{height: '100%'}}>
                    <Options />
                    <SkinBase />
                    <Export />
                    <Credit />
                </div>
            </Dropzone>
        );
    }
}

var mapStateToProps = (state, props) => {
    return {
        shortcutsActive: state.topLayer
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        undo: () => {
            dispatch(ActionCreators.undo());
        },
        redo: () => {
            dispatch(ActionCreators.redo());
        },
        copyShape: () => {
            dispatch(copyToClipboard);
        },
        pasteShape: () => {
            dispatch(pasteFromClipboard);
        },
        deleteShape: () => {
            dispatch({type: 'DELETE_SELECTED_SHAPE'});
        },
        changeOverlaySrc: src => {
            dispatch({
                type: 'CHANGE_OVERLAY_SRC',
                src
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
