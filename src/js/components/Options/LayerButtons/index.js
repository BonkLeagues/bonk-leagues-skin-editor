import React from 'react';

// Used for moving shapes up and down a layer
export default ({ upDisabled, downDisabled, up, down }) => (
    <div className="layer-buttons">
        <button className="up-layer" onClick={up} disabled={upDisabled}>
            <img src={require('./up.svg')} />
        </button>
        <button className="down-layer" onClick={down} disabled={downDisabled}>
            <img src={require('./down.svg')} />
        </button>
    </div>
);
