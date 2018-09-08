export default (dispatch, getState) => {
    // Gets the shapes from the Redux state
    var { shapes } = getState();

    var selectedShape = shapes.present.filter(shape => shape.selected)[0];
    
    dispatch({
        type: 'COPY_TO_CLIPBOARD',
        shape: selectedShape
    });
}
