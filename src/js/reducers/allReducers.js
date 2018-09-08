import { combineReducers } from 'redux';
import undoable, { includeAction } from 'redux-undo';

import shapes from './shapes';
import baseColor from './baseColor';
import allShapes from './allShapes';
import skinCode from './skinCode';
import topLayer from './topLayer';
import overlay from './overlay';
import clipboard from './clipboard';
import focus from './focus';

import undoableActions from './undoableActions';

// Combines all the reducers together into one big super cool reducer
export default combineReducers({
    shapes: undoable(shapes, { filter: includeAction(undoableActions) }),
    baseColor: undoable(baseColor, { filter: includeAction(undoableActions) }),
    overlay: undoable(overlay, { filter: includeAction(undoableActions) }),
    
    allShapes, skinCode, topLayer, clipboard, focus
});
