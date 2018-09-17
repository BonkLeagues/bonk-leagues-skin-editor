import React from 'react';
import { connect } from 'react-redux';

import changeOverlayPalette from '../../actions/changeOverlayPalette';
import MoveableShape from './MoveableShape';

class Overlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false  // Whether to display the overlay or not
        };
    }

    onError = () => {
        this.setState({display: false});
    }
    onLoad = () => {
        this.setState({
            display: true,
            redoPalette: true
        });
    }

    render() {
        return (
            // <img className="overlay"
            //     onError={this.onError}
            //     onLoad={this.onLoad}
            //     ref={el => {
            //         // If the palette needs to be redone, take the image element and use
            //         // it to generate the colours needed
            //         if (this.state.redoPalette) {
            //             this.props.changeOverlayPalette(el);

            //             this.setState({
            //                 redoPalette: false
            //             });
            //         }
            //     }}
            //     style={{
            //         opacity: this.props.active ? .5 : 0,
            //         display: this.state.display ? 'block' : 'none',
            //         transform: 'translate(-50%, -50%) scale(' + this.props.scale + ')'
            //     }}
            //     src={this.props.src}
            // />

            <div className="overlay" style={{
                pointerEvents: this.props.selected ? 'all' : 'none',
                display: this.props.active ? 'block' : 'none'
            }}>
                <MoveableShape
                    onShapeDown={this.props.onShapeDown}
                    onDraggerDown={this.props.onDraggerDown}
                    zoom={this.props.zoom}
                >
                    <img
                        style={{
                            opacity: this.props.transparency,
                            height: 300
                        }}
                        onError={this.onError}
                        onLoad={this.onLoad}
                        ref={el => {
                            // If the palette needs to be redone, take the image element and use
                            // it to generate the colours needed
                            if (this.state.redoPalette) {
                                this.props.changeOverlayPalette(el);
        
                                this.setState({
                                    redoPalette: false
                                });
                            }
                        }}
                        src={this.props.src}
                        draggable="false"
                    />
                </MoveableShape>
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    return state.overlay.present;
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        changeOverlayPalette: el => {
            dispatch(changeOverlayPalette(el));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Overlay);
