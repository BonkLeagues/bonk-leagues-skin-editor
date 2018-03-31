import React from 'react';
import { connect } from 'react-redux';

import OptionsInput from './OptionsInput';
import OptionsCheckbox from './OptionsCheckbox';

var AllInputs = ({ deleteLayer }) => (
    <div>
        <OptionsInput type="scale" />
        <OptionsInput type="rotation" />
        <OptionsInput type="position.x" />
        <OptionsInput type="position.y" />

        <div className="checkboxes">
            <OptionsCheckbox type="hf" />
            <OptionsCheckbox type="vf" />
        </div>

        <div className="buttons">
            <button className="delete-layer" onClick={()=>deleteLayer()}>
                Delete Shape
            </button>
        </div>
    </div>
);

var mapStateToProps = (state, props) => {
    return {};
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        deleteLayer: () => {
            dispatch({type: 'DELETE_SELECTED_SHAPE'});
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllInputs);
