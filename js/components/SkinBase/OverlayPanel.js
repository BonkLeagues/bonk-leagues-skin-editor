import React from 'react';
import { connect } from 'react-redux';

var OverlayPanel = ({ active, onActiveChange, onSrcChange, onScaleChange }) => (
    <div className="overlay-panel">
        <div onClick={()=>onActiveChange(active)} className={'checkbox ' + (active ? 'ticked' : '')} />
        <input onChange={onSrcChange} placeholder="Overlay URL..." type="text" />
        <input onChange={onScaleChange} defaultValue={100} min={25} max={300} type="range" />
    </div>
);

var mapStateToProps = (state, props) => {
    return {
        active: state.overlay.active
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onActiveChange: active => {
            dispatch({
                type: 'CHANGE_OVERLAY_ACTIVE',
                active: !active
            });
        },
        onSrcChange: e => {
            dispatch({
                type: 'CHANGE_OVERLAY_SRC',
                src: e.target.value
            });
        },
        onScaleChange: e => {
            dispatch({
                type: 'CHANGE_OVERLAY_SCALE',
                scale: e.target.value
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OverlayPanel);
