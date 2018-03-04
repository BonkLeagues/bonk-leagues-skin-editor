import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import shapes from './shapes';
import baseColor from './baseColor';
import allShapes from './allShapes';
import skinCode from './skinCode';
import topLayer from './topLayer';

export default combineReducers({
    shapes: undoable(shapes),
    baseColor: undoable(baseColor),
    allShapes,
    skinCode,
    topLayer
});
