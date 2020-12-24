import React from 'react';

// Used for moving shapes up and down a layer
export default ({ upDisabled, downDisabled, up, down }) => (
    <div className="layer-buttons">
        <button className="up-layer" title="Move Up" onClick={up} disabled={upDisabled}>
            <img src={require('./up.svg')} />
        </button>
        <button className="down-layer" title="Move Down" onClick={down} disabled={downDisabled}>
            <img src={require('./down.svg')} />
        </button>
    </div>
);
