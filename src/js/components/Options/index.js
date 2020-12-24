import React from 'react';
import { connect } from 'react-redux';

import AddShape from './AddShape';
import ColorPicker from './ColorPicker';
import LayerButtons from './LayerButtons';
import AllInputs from './AllInputs';

var Options = ({
    // I didn't realise this component has this many props

    baseColor, selectedShape,

    moveShapeUp, moveShapeDown,
    upDisabled, downDisabled,

    disableTopLayer, enableTopLayer
}) => (
    <div className="options-panel"
        onMouseEnter={disableTopLayer}
        onMouseLeave={enableTopLayer}
    >
        <h1 className="shape-name">{selectedShape ? selectedShape.name : 'Base Colour'}</h1>
        {
            selectedShape &&
            <LayerButtons
                up={moveShapeUp}
                down={moveShapeDown}
                upDisabled={upDisabled}
                downDisabled={downDisabled}
            />
        }
        <ColorPicker highlightColor={selectedShape ? selectedShape.color : baseColor.color} />
        {
            selectedShape &&
            <AllInputs />
        }

        <AddShape />
    </div>
);

var mapStateToProps = (state, props) => {
    var baseColor = state.baseColor.present;

    var shapes = state.shapes.present;

    var shapeIndex = shapes.map(shape => shape.selected).indexOf(true);
    var selectedShape = shapes[shapeIndex];

    return {
        baseColor, selectedShape,

        // Used to disable layer buttons (e.g. disabling the up button if the shape is at the top layer)
        upDisabled: shapeIndex === shapes.length - 1,
        downDisabled: shapeIndex === 0
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        moveShapeUp: () => {
            dispatch({type: 'SELECTED_SHAPE_UP'});
        },
        moveShapeDown: () => {
            dispatch({type: 'SELECTED_SHAPE_DOWN'});
        },

        // Used for showing a shape on the top layer or not
        // If the cursor is hovering over the options panel, the selected shape will not appear on top,
        // otherwise it will appear above everything else
        enableTopLayer: () => {
            dispatch({
                type: 'TOP_LAYER',
                value: true
            });
            dispatch({
                type: 'SET_FOCUS',
                focus: false
            });
        },
        disableTopLayer: () => {
            dispatch({
                type: 'TOP_LAYER',
                value: false
            });
            dispatch({
                type: 'SET_FOCUS',
                focus: true
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Options);
