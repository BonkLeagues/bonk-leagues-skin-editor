import React from 'react';
import { connect } from 'react-redux';

var Color = ({ color, highlight, anySelected, onMouseEnter, onMouseLeave, onClick }) => (
    <div className={'color' + (highlight ? ' highlighted' : '')}
        onMouseEnter={()=>onMouseEnter(anySelected)}
        onMouseLeave={()=>onMouseLeave(anySelected)}
        onClick={()=>onClick(anySelected)}
        style={{
            background: '#'+color
        }}
    ></div>
);

var mapStateToProps = (state, props) => {
    return {
        anySelected: state.shapes.present.filter(shape => shape.selected).length > 0
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        // TODO: Clean this up!

        onMouseEnter: anySelected => {
            if (anySelected) {
                dispatch({
                    type: 'CHANGE_SELECTED_PREVIEW_COLOR',
                    color: props.color
                });
            } else {
                dispatch({
                    type: 'CHANGE_BASE_PREVIEW_COLOR',
                    color: props.color
                });
            }
        },
        onMouseLeave: anySelected => {
            if (anySelected) {
                dispatch({type: 'REMOVE_SELECTED_PREVIEW_COLOR'});
            } else {
                dispatch({type: 'REMOVE_BASE_PREVIEW_COLOR'});
            }
        },

        onClick: anySelected => {
            if (anySelected) {
                dispatch({type: 'DISABLE_SELECTED_PREVIEW_COLOR'});
                dispatch({
                    type: 'CHANGE_SELECTED_COLOR',
                    color: props.color
                });
            } else {
                dispatch({type: 'DISABLE_BASE_PREVIEW_COLOR'});
                dispatch({
                    type: 'CHANGE_BASE_COLOR',
                    color: props.color
                });
            }
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Color);
