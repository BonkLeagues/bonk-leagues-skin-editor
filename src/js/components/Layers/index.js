import React from 'react';

import Layer from './layer';

export default class Layers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };
    }

    toggleVisible = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div className="layers"
                style={{
                    right: this.state.visible ? '0' : '-260px'
                }}
            >
                <Layer />
                <Layer />
                <Layer />
                <Layer />
                <img className="arrow"
                    onClick={this.toggleVisible}
                    src={require(this.state.visible ? './icons/arrow_flipped.svg' : './icons/arrow.svg')}
                    draggable="false"
                />
            </div>
        );
    }
}