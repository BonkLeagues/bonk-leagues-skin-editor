import React from 'react';

// Used for moving shapes up and down a layer
export default ({ onCopy, onPaste, onUndo, onRedo }) => (
    <div className="shortcut-buttons">
        <button title="Copy" onClick={onCopy}>
            <img src={require('./copy.svg')} />
        </button>
        <button title="Paste" onClick={onPaste}>
            <img src={require('./paste.svg')} />
        </button>
        <button title="Undo" onClick={onUndo}>
            <img src={require('./undo.svg')} />
        </button>
        <button title="Redo" onClick={onRedo}>
            <img src={require('./redo.svg')} />
        </button>
    </div>
);
