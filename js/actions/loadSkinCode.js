import { skinCodeToObject } from '../modules/skinCode';

export default dispatch => {
    var skinCode = decodeURIComponent(window.location.href.split('?')[1]);

    var skinData = skinCodeToObject(skinCode);

    dispatch({
        type: 'CHANGE_BASE_COLOR',
        color: skinData.baseColor
    });
    for (var i=0;i< skinData.shapes.length;i++) {
        dispatch({
            type: 'ADD_SHAPE',
            id: skinData.shapes[i].shapeID
        });
        dispatch({
            type: 'CHANGE_SHAPE_TRANSLATION',
            ...skinData.shapes[i]
        });
        dispatch({
            type: 'CHANGE_SELECTED_COLOR',
            color: skinData.shapes[i].color
        });
        dispatch({type: 'DESELECT_ALL'});
    }
}
