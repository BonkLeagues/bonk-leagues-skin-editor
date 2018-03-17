import React from 'react';
import { connect } from 'react-redux';

import Color from '../Color';

var OverlayPanel = ({ active, palette, onActiveChange, onSrcChange, onScaleChange }) => (
    <div className="overlay-panel" onMouseDown={e=>e.stopPropagation()}>
        <span>Overlay Controls</span>
        <div onClick={()=>onActiveChange(active)} className={'checkbox ' + (active ? 'ticked' : '')} />
        <input onChange={onScaleChange} defaultValue={100} min={25} max={300} type="range" />
        <div className="palette">
            {
                palette &&
                palette.map((color, i) =>
                    <Color color={color} key={i} />
                )
            }
        </div>
    </div>
);

var mapStateToProps = (state, props) => {
    return {...state.overlay};
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
