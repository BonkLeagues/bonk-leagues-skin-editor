import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Layer from './layer';

export default class Layers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    setVisible = () => {
        this.setState({
            visible: true
        });
    }
    setInvisible = () => {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div className="layers-wrapper">
                <div className="layers"
                    style={{
                        right: this.state.visible ? '0' : '-260px'
                    }}
                    onMouseLeave={this.setInvisible}
                >
                    <Scrollbars
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        renderTrackVertical={props => <div {...props} className="track-vertical" />}
                        renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
                    >
                        <Layer />
                        <Layer />
                    </Scrollbars>
                </div>
                <img className="arrow"
                    onMouseEnter={this.setVisible}
                    src={require('./icons/arrow.svg')}
                    draggable="false"
                />
            </div>
        );
    }
}