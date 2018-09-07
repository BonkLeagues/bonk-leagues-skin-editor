import { skinCodeToObject } from '../modules/skinCode';

export default dispatch => {
    // Gets skin code (either from URL or localStorage)
    var skinCode;
    if (window.location.href.indexOf('?') > -1) {
        skinCode = decodeURIComponent(window.location.href.split('?')[1]);
    } else {
        skinCode = localStorage.getItem('skinCode');
    }

    // Converts skin code to an object
    var skinData = skinCodeToObject(skinCode);

    // Set base colour
    dispatch({
        type: 'CHANGE_BASE_COLOR',
        color: skinData.baseColor
    });

    for (var i = 0; i < skinData.shapes.length; i++) {
        // Add the shape
        dispatch({
            type: 'ADD_SHAPE',
            id: skinData.shapes[i].shapeID
        });
        // Set its position, rotation and scale
        dispatch({
            type: 'CHANGE_SHAPE_TRANSLATION',
            ...skinData.shapes[i]
        });
        // Set its colour
        dispatch({
            type: 'CHANGE_SELECTED_COLOR',
            color: skinData.shapes[i].color
        });
        // Deselects the shape so it's not affected by the next translations
        dispatch({type: 'DESELECT_ALL'});
    }
}
