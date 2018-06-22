import React from 'react';

export default class Layers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
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
                    right: this.state.visible ? '0' : '-228px'
                }}
            >
                <img className="arrow"
                    onClick={this.toggleVisible}
                    src={require(this.state.visible ? './arrow_flipped.svg' : './arrow.svg')}
                    draggable="false"
                />
            </div>
        );
    }
}