import uuidv1 from 'uuid/v1';

export default function(state=[], action) {
    switch (action.type) {
        case 'ADD_SHAPE': {
            return [...state, {
                uuid: uuidv1(),
                name: 'Shape '+ (state.length+1),
                shapeID: action.id,
                selected: true,

                position: {
                    x: 0,
                    y: 0
                },
                rotation: 0,
                scale: 1,
                hf: false,
                vf: false,
                color: '000000',

                visible: true,
                locked: false
            }];
        }
        case 'DELETE_SELECTED_SHAPE': {
            return state.filter(shape => {
                return !shape.selected;
            });
        }

        case 'SELECT_SHAPE': {
            return state.map(shape => {
                return {...shape, selected: shape.uuid === action.id};
            });
        }
        case 'DESELECT_ALL': {
            return state.map(shape => {
                return {...shape, selected: false};
            });
        }

        case 'UPDATE_RECT': {
            return state.map(shape => {
                if (shape.uuid === action.id) {
                    return {...shape, rect: action.rect};
                } else {
                    return shape;
                }
            });
        }

        case 'SELECTED_SHAPE_UP': {
            var shapeIndex = state.map(shape => shape.selected).indexOf(true);
            return state.map((shape, i) => {
                if (i === shapeIndex) {
                    return state[i+1];
                } else if (i === shapeIndex+1) {
                    return state[i-1];
                } else {
                    return shape;
                }
            });
        }
        case 'SELECTED_SHAPE_DOWN': {
            var shapeIndex = state.map(shape => shape.selected).indexOf(true);
            return state.map((shape, i) => {
                if (i === shapeIndex) {
                    return state[i-1];
                } else if (i === shapeIndex-1) {
                    return state[i+1];
                } else {
                    return shape;
                }
            });
        }

        case 'MOVE_SELECTION_UP': {
            var shapeIndex = state.map(shape => shape.selected).indexOf(true);
            if (shapeIndex >= state.length - 1) return state;

            return state.map((shape, i) => {
                if (i === shapeIndex) {
                    return {...shape,
                        selected: false
                    };
                } else if (i === shapeIndex + 1) {
                    return {...shape,
                        selected: true
                    };
                } else {
                    return shape;
                }
            });
        }
        case 'MOVE_SELECTION_DOWN': {
            var shapeIndex = state.map(shape => shape.selected).indexOf(true);
            if (shapeIndex <= 0) return state;

            return state.map((shape, i) => {
                if (i === shapeIndex) {
                    return {...shape,
                        selected: false
                    };
                } else if (i === shapeIndex - 1) {
                    return {...shape,
                        selected: true
                    };
                } else {
                    return shape;
                }
            });
        }

        case 'CHANGE_SHAPE_TRANSLATION': {
            return state.map(shape => {
                if (shape.selected) {
                    return {...shape,
                        position: action.position || shape.position,
                        rotation: action.rotation || shape.rotation,
                        scale: action.scale || shape.scale,
                        hf: typeof action.hf === 'undefined' ? shape.hf : action.hf,
                        vf: typeof action.vf === 'undefined' ? shape.vf : action.vf
                    };
                } else {
                    return shape;
                }
            });
        }

        case 'DISABLE_SELECTED_PREVIEW_COLOR': {
            return state.map(shape => {
                if (shape.selected) {
                    return {...shape,
                        previewColorEnabled: false
                    };
                } else {
                    return shape;
                }
            });
        }
        case 'CHANGE_SELECTED_COLOR': {
            return state.map(shape => {
                if (shape.selected) {
                    return {...shape,
                        color: action.color
                    };
                } else {
                    return shape;
                }
            });
        }
        case 'CHANGE_SELECTED_PREVIEW_COLOR': {
            return state.map(shape => {
                if (shape.selected) {
                    return {...shape,
                        previewColor: action.color,
                        previewColorEnabled: true
                    };
                } else {
                    return shape;
                }
            });
        }
        case 'REMOVE_SELECTED_PREVIEW_COLOR': {
            return state.map(shape => {
                if (shape.selected) {
                    return {...shape,
                        previewColor: null
                    };
                } else {
                    return shape;
                }
            });
        }

        case 'TOGGLE_VISIBLE': {
            return state.map(shape => {
                if (shape.uuid === action.id) {
                    return {...shape,
                        visible: !shape.visible
                    };
                } else {
                    return shape;
                }
            });
        }
        case 'TOGGLE_LOCK': {
            return state.map(shape => {
                if (shape.uuid === action.id) {
                    return {...shape,
                        locked: !shape.locked
                    };
                } else {
                    return shape;
                }
            });
        }

        case 'SET_ALL_SHAPES': {
            return action.shapes;
        }

        case 'PASTE_FROM_CLIPBOARD': {
            return [...state.map(shape => ({...shape, selected: false})),
                {...action.shape,
                    rotation: 0,
                    scale: 1
                }
            ];
        }
        case 'CHANGE_PASTED_SCALE': {
            return state.map(shape => {
                if (shape.selected) {
                    return {...shape,
                        rotation: action.shape.rotation,
                        scale: action.shape.scale
                    };
                } else {
                    return shape;
                }
            });
        }

        case 'DELETE_ALL': {
            localStorage.removeItem('skinCode');
            return [];
        }

        default: return state;
    }
}
