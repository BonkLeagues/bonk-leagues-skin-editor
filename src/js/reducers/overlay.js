// How the overlay starts
var initialState = {
    active: false,
    selected: true,

    position: {
        x: 0, y: 0
    },
    rotation: 0,
    scale: 1,

    transparency: .5
};

export default function(state=initialState, action) {
    switch (action.type) {
        case 'CHANGE_OVERLAY_ACTIVE':
        case 'CHANGE_OVERLAY_PALETTE': {
            return {...state, ...action};
        }

        case 'CHANGE_OVERLAY_SRC': {
            return {
                ...state,
                src: action.src,
                active: true,
                selected: true
            };
        }

        case 'SELECT_OVERLAY': {
            return {
                ...state,
                selected: true
            };
        }
        
        case 'CHANGE_OVERLAY_TRANSPARENCY': {
            return {
                ...state,
                transparency: action.transparency / 100
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
