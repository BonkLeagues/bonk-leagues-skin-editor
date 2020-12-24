import React from 'react';

// Used for moving shapes up and down a layer
export default ({ onCopy, onPaste, onUndo, onRedo }) => (
    <div className="shortcut-buttons">
        <button onClick={onCopy}>
            <img src={require('./copy.svg')} />
        </button>
        <button onClick={onPaste}>
            <img src={require('./paste.svg')} />
        </button>
        <button onClick={onUndo}>
            <img src={require('./undo.svg')} />
        </button>
        <button onClick={onRedo}>
            <img src={require('./redo.svg')} />
        </button>
    </div>
);
