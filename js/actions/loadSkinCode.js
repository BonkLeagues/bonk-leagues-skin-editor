import { Buffer } from 'buffer/';
import bsplit from 'buffer-split';
import bindexOf from 'buffer-indexof';
import uuidv1 from 'uuid/v1';

export default dispatch => {
    var skinCode = decodeURIComponent(window.location.href.split('?')[1]);
    var skinBuffer = Buffer.from(skinCode, 'base64');

    var skinData;
    if (bindexOf(skinBuffer, new Buffer('616c000100', 'hex')) > -1) {
        var layerData = bsplit(skinBuffer, new Buffer('0a05000100', 'hex'));
        layerData[0] = bsplit(layerData[0], new Buffer('616c000100', 'hex'))[1];

        skinData = {shapes: []};

        for (var i=0;i< layerData.length;i++) {
            skinData = parseLayer(skinData, layerData[i], i+1);
        }

        skinData.shapes = skinData.shapes.reverse();
    } else {
        skinData = {
            baseColor: subBuf(skinBuffer, skinBuffer.length-3, 3).toString('hex'),
            shapes: []
        };
    }

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

var sF = 700/30;
function parseLayer(skinData, layer, index) {
    var shapeID = layer[0];

    var scale = bufferToFloat(subBuf(layer, 1, 4));
    var angle = bufferToFloat(subBuf(layer, 5, 4));

    var xPos = bufferToFloat(subBuf(layer, 9, 4));
    var yPos = bufferToFloat(subBuf(layer, 13, 4));

    var hf = !!subBuf(layer, 17, 1)[0];
    var vf = !!subBuf(layer, 18, 1)[0];

    var color = subBuf(layer, 20, 3).toString('hex');

    skinData.shapes.push({
        uuid: uuidv1(),
        name: 'Shape ' + index,
        shapeID: shapeID-1,
        selected: false,

        position: {
            x: xPos * sF,
            y: yPos * sF
        },
        rotation: angle,
        scale: scale * sF,
        hf: hf,
        vf: vf,
        color: color
    });

    if (layer.length > 23) skinData.baseColor = subBuf(layer, layer.length-3, 3).toString('hex');

    return skinData;
}

function bufferToFloat(buffer) {
    return Math.round(buffer.readFloatBE(0)*100)/100;
}

function subBuf(buffer, start, end) {
    var result = [];
    for (var i=start;i< start+end;i++) {
        result.push(buffer[i]);
    }
    return Buffer.from(result);
}
