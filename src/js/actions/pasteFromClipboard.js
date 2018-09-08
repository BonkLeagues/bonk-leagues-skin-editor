export default (dispatch, getState) => {
    // Gets the clipboard contents from the Redux state
    var { clipboard } = getState();

    // If there is no shape on the clipboard, do nothing
    if (!clipboard.name) return;

    // Changes the shape's unique identifier
    dispatch({type: 'CHANGE_CLIPBOARD_UUID'});

    // Pastes the shape
    dispatch({
        type: 'PASTE_FROM_CLIPBOARD',
        shape: clipboard
    });
}
