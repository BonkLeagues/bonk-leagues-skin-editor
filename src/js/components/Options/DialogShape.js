import React from 'react';
import { connect } from 'react-redux';

import ShapeIcon from '../ShapeIcon';

var DialogShape = ({ shape, color, size, onClick, toggleDialog }) => (
    <div className="dialog-shape" style={{height: size}} onClick={e => {
        onClick();
        if (!e.shiftKey) toggleDialog();
    }}>
        <ShapeIcon shape={shape} color={color} size={size} />
    </div>
);

var mapStateToProps = (state, props) => {
    return {};
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: () => {
            dispatch({type: 'DESELECT_ALL'});
            dispatch({
                type: 'ADD_SHAPE',
                id: props.id
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DialogShape);
