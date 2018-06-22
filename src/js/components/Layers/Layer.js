import React from 'react';

export default class Layer extends React.Component {
    render() {
        return (
            <div className="layer">
                <div className="layer-shape"></div>

                <h2>Shape 1</h2>

                <div className="buttons">
                    <div className="button">
                        <img src={require('./icons/visible.svg')} draggable="false" />
                    </div>
                    <div className="spacer"></div>
                    <div className="button">
                        <img src={require('./icons/unlocked.svg')} draggable="false" />
                    </div>
                </div>
            </div>
        );
    }
}