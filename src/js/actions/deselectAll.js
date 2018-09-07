export default dispatch => {
    dispatch({type: 'DESELECT_ALL'});

    // Removes focus from input boxes (allowing keyboard shortcuts)
    dispatch({
        type: 'SET_FOCUS',
        focus: false
    });
}
