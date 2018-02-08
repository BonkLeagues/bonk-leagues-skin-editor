import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import shapes from './shapes';
import baseColor from './baseColor';
import allShapes from './allShapes';

export default combineReducers({
    shapes: undoable(shapes),
    baseColor: undoable(baseColor),
    allShapes
});
