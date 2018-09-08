// How the overlay starts
var initialState = {
    active: true,
    selected: true,

    position: {
        x: 0, y: 0
    },
    rotation: 0,
    scale: 1
};

export default function(state=initialState, action) {
    switch (action.type) {
        case 'CHANGE_OVERLAY_ACTIVE':
        case 'CHANGE_OVERLAY_SRC':
        case 'CHANGE_OVERLAY_PALETTE': {
            return {...state, ...action};
        }
        
        case 'CHANGE_OVERLAY_SCALE': {
            return {
                ...state,
                scale: action.scale / 100
            };
        }
        case 'CHANGE_OVERLAY_TRANSLATION': {
            return {
                ...state,
                position: action.position || state.position,
                rotation: action.rotation || state.rotation,
                scale: action.scale || state.scale
            };
        }

        case 'DESELECT_ALL': {
            return {
                ...state,
                selected: false
            };
        }

        default: return state;
    }
}
