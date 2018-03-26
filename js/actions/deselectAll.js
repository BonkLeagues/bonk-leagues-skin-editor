export default dispatch => {
    dispatch({type: 'DESELECT_ALL'});
    dispatch({type: 'SET_FOCUS', focus: false});
}
