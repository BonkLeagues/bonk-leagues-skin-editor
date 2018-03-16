import React from 'react';
import { connect } from 'react-redux';

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
        this.setState({display: true});
    }

    render() {
        return (
            <img
                onError={this.onError}
                onLoad={this.onLoad}
                style={{
                    opacity: this.props.active ? .5 : 0,
                    zIndex: '133769420',
                    pointerEvents: 'none',
                    height: '400px',
                    display: this.state.display ? 'block' : 'none',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
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

export default connect(mapStateToProps)(Overlay);
