// How did I write any of this

import { Buffer } from 'buffer/';
import bsplit from 'buffer-split';
import uuidv1 from 'uuid/v1';

export function objectToSkinCode(skinData) {
    var sF = 30 / 700;

    skinData.shapes = skinData.shapes.reverse();

    var skinBuffer = new Buffer('0a070361000209', 'hex');
    skinBuffer = addNumberToBuffer(skinBuffer, skinData.shapes.length * 2 + 1);

    if (skinData.shapes.length > 0) {
        skinBuffer = addToBuffer(skinBuffer, new Buffer('010a0705616c000100', 'hex'));
    } else {
        skinBuffer = addToBuffer(skinBuffer, new Buffer('010101', 'hex'));
    }

    for (var i = 0; i < skinData.shapes.length; i++) {
        var layer = skinData.shapes[i];
        skinBuffer = addNumberToBuffer(skinBuffer, layer.shapeID + 1);
        skinBuffer = addFloatToBuffer(skinBuffer, layer.scale * sF);
        skinBuffer = addFloatToBuffer(skinBuffer, layer.rotation);
        skinBuffer = addFloatToBuffer(skinBuffer, layer.position.x * sF);
        skinBuffer = addFloatToBuffer(skinBuffer, layer.position.y * sF);
        skinBuffer = addNumberToBuffer(skinBuffer, +layer.hf);
        skinBuffer = addNumberToBuffer(skinBuffer, +layer.vf);
        skinBuffer = addColorToBuffer(skinBuffer, layer.color);

        if (i !== skinData.shapes.length - 1) skinBuffer = addToBuffer(skinBuffer, new Buffer('0a05000100', 'hex'));
    }

    skinBuffer = addColorToBuffer(skinBuffer, skinData.baseColor);

    return skinBuffer.toString('base64');
}

function numberToHex(n) {
    var hexCode = n.toString(16);
    return new Buffer(hexCode.length < 2 ? ('0' + hexCode) : hexCode, 'hex');
}
function addToBuffer(skinBuffer, buffer) {
    return Buffer.concat([skinBuffer, buffer]);
}
function addNumberToBuffer(skinBuffer, n) {
    return addToBuffer(skinBuffer, numberToHex(n));
}
function addFloatToBuffer(skinBuffer, n) {
    var floatBuffer = Buffer.allocUnsafe(4);
    floatBuffer.writeFloatBE(n, 0);
    return addToBuffer(skinBuffer, floatBuffer);
}
function addColorToBuffer(skinBuffer, col) {
    return addToBuffer(skinBuffer, new Buffer('00' + col.replace('#', ''), 'hex'));
}

export function skinCodeToObject(skinCode) {
    var skinBuffer = Buffer.from(skinCode, 'base64');

    var skinData;
    if (skinBuffer.length > 21) {
        var layerData = bsplit(skinBuffer, new Buffer('0a05000100', 'hex'));
        layerData[0] = bsplit(layerData[0], new Buffer('616c000100', 'hex'))[1];

        skinData = {shapes: []};

        for (var i = 0; i < layerData.length; i++) {
            skinData = parseLayer(skinData, layerData[i], i + 1);
        }

        skinData.shapes = skinData.shapes.reverse();
    } else {
        skinData = {
            baseColor: subBuf(skinBuffer, skinBuffer.length - 3, 3).toString('hex'),
            shapes: []
        };
    }

    return skinData;
}

function parseLayer(skinData, layer, index) {
    var sF = 700 / 30;

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
        shapeID: shapeID - 1,
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

    if (layer.length > 23) skinData.baseColor = subBuf(layer, layer.length - 3, 3).toString('hex');

    return skinData;
}

function bufferToFloat(buffer) {
    return buffer.readFloatBE(0);
}

function subBuf(buffer, start, end) {
    var result = [];
    for (var i = start; i < start + end; i++) {
        result.push(buffer[i]);
    }
    return Buffer.from(result);
}
