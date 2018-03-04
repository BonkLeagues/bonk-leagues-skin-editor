import React from 'react';

export default ({ upDisabled, downDisabled, up, down }) => (
    <div className="layer-buttons">
        <button className="up-layer" onClick={up} disabled={upDisabled}>
            <img src="img/up.svg" />
        </button>
        <button className="down-layer" onClick={down} disabled={downDisabled}>
            <img src="img/down.svg" />
        </button>
    </div>
);
