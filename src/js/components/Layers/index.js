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

    // Slides the layer panel in and out
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
        // Sets the position of the layers panel to show/hide it
        var panelRight = this.state.visible ? '0' : '-260px';

        // Reverses a copy of the shapes array and maps it to an array of Layer components
        var layers =
            this.props.shapes
            .slice()
            .reverse()
            .map(shape =>
                <Layer shape={shape} key={shape.uuid} />
            );

        return (
            <div className="layers-wrapper">
                <div className="layers"
                    style={{right: panelRight}}
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
                        {layers}
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