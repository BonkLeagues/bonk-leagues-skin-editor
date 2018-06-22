import React from 'react';
import { connect } from 'react-redux';

class Layer extends React.Component {
    selectShape = () => {
        this.props.selectShape(this.props.shape.uuid);
    }

    render() {
        var { shape } = this.props;
        return (
            <div className={'layer' + (shape.selected ? ' selected' : '')}
                onClick={this.selectShape}
            >
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

var mapStateToProps = (state, props) => {
    return {};
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        selectShape: id => {
            dispatch({
                type: 'SELECT_SHAPE',
                id
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layer);