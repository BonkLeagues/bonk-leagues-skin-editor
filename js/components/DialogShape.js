import React from 'react';
import { connect } from 'react-redux';

var DialogShape = ({ shape, onClick, toggleDialog }) => (
    <div className="dialog-shape" onClick={e => {
        onClick();
        if (!e.shiftKey) toggleDialog();
    }} dangerouslySetInnerHTML={{__html: shape}}></div>
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
