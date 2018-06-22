import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import Layer from './layer';

class Layers extends React.Component {
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
                        {this.props.shapes.slice().reverse().map(shape =>
                            <Layer shape={shape} key={shape.uuid} />
                        )}
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

var mapStateToProps = (state, props) => {
    return {
        shapes: state.shapes.present
    };
}

export default connect(mapStateToProps)(Layers);