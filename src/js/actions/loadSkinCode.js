import { skinCodeToObject } from '../modules/skinCode';

export default dispatch => {
    var skinCode;
    if (window.location.href.indexOf('?')>-1) {
        skinCode = decodeURIComponent(window.location.href.split('?')[1]);
    } else {
        skinCode = localStorage.getItem('skinCode');
    }

    console.log(skinCode);

    var skinData = skinCodeToObject(skinCode);

    console.log(skinData);

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
