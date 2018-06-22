import React from 'react';

export default class Layer extends React.Component {
    render() {
        var { shape } = this.props;
        return (
            <div className={'layer' + (shape.selected ? ' selected' : '')}>
                <div className="layer-shape" style={{background: '#' + shape.color}}></div>

                <h2>{shape.name}</h2>

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