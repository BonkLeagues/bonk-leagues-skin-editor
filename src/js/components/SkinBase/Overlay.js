import React from 'react';
import { connect } from 'react-redux';

import changeOverlayPalette from '../../actions/changeOverlayPalette';

class Overlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false
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
            <img className="overlay"
                onError={this.onError}
                onLoad={this.onLoad}
                ref={el=>{
                    if (this.state.redoPalette) {
                        this.props.changeOverlayElement(el);
                        this.setState({
                            redoPalette: false
                        });
                    }
                }}
                style={{
                    opacity: this.props.active ? .5 : 0,
                    display: this.state.display ? 'block' : 'none',
                    transform: 'translate(-50%,-50%) scale('+this.props.scale+')'
                }}
                src={this.props.src}
            />
        );
    }
}

var mapStateToProps = (state, props) => {
    return {...state.overlay};
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        changeOverlayElement: el => {
            dispatch(changeOverlayPalette(el));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Overlay);
