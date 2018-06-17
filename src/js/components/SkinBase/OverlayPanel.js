import React from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import Color from '../Color';

var OverlayPanel = ({ active, palette, src, onActiveChange, onSrcChange, onScaleChange }) => (
    <div className="overlay-panel" onMouseDown={e=>e.stopPropagation()}>
        {
            src ?
            <div>
                <span>Overlay Controls</span>
                <div onClick={()=>onActiveChange(active)} className={'checkbox ' + (active ? 'ticked' : '')} />
                <Slider
                    defaultValue={100}
                    min={25}
                    max={300}
                    onChange={onScaleChange}
                />
                <div className="palette">
                    {
                        palette &&
                        palette.map((color, i) =>
                            <Color color={color} key={i} />
                        )
                    }
                </div>
            </div> :
            <div>
                <span>Drag-and-drop an image here to enable the image overlay</span>
            </div>
        }
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
        onScaleChange: scale => {
            dispatch({
                type: 'CHANGE_OVERLAY_SCALE',
                scale
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OverlayPanel);
