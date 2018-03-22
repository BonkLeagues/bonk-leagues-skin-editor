export default (dispatch, getState) => {
    var { clipboard } = getState();

    dispatch({type: 'CHANGE_CLIPBOARD_UUID'});
    dispatch({
        type: 'PASTE_FROM_CLIPBOARD',
        shape: clipboard
    });
    dispatch({
        type: 'CHANGE_PASTED_SCALE',
        shape: clipboard
    });
}
