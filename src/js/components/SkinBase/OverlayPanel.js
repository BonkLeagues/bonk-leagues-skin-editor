import React from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';

// Slider CSS
import 'rc-slider/assets/index.css';

import Color from '../Color';

var OverlayPanel = ({
    src, palette,
    selectOverlay, onTransparencyChange
}) => (
    <div className="overlay-panel" onMouseDown={e => e.stopPropagation()}>
        {
            // If there is an overlay, display the overlay controls
            src ? (
                <div>
                    <span>Overlay Controls</span>
    
                    {/* <div className={'checkbox ' + (active ? 'ticked' : '')}
                        onClick={() => onTransparencyChange(active)}
                    /> */}

                    <img className="select"
                        onClick={selectOverlay}
                        src={require('./select.svg')}
                        draggable="false"
                    />
    
                    <Slider
                        defaultValue={50}
                        min={0}
                        max={100}
                        onChange={onTransparencyChange}
                    />
    
                    <div className="palette">
                        {
                            palette &&
                            palette.map((color, i) =>
                                <Color color={color} key={i} />
                            )
                        }
                    </div>
                </div>
            ) : (
                <div>
                    <span>Drag-and-drop an image here to enable the image overlay</span>
                </div>
            )
        }
    </div>
);

var mapStateToProps = (state, props) => {
    return state.overlay.present;
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        selectOverlay: () => {
            dispatch({type: 'DESELECT_ALL'});
            dispatch({type: 'SELECT_OVERLAY'});
        },

        onTransparencyChange: transparency => {
            dispatch({
                type: 'CHANGE_OVERLAY_TRANSPARENCY',
                transparency
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OverlayPanel);
