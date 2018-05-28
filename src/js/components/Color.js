import React from 'react';
import { connect } from 'react-redux';

var Color = ({ color, highlight, anySelected, onClick }) => (
    <div className={'color' + (highlight ? ' highlighted' : '')} onClick={()=>onClick(anySelected)} style={{
        background: '#'+color
    }}></div>
);

var mapStateToProps = (state, props) => {
    return {
        anySelected: state.shapes.present.filter(shape => shape.selected).length > 0
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: anySelected => {
            if (anySelected) {
                dispatch({
                    type: 'CHANGE_SELECTED_COLOR',
                    color: props.color
                });
            } else {
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
