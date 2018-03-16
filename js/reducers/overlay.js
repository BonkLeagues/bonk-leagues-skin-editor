export default function(state={active: true, scale: 1}, action) {
    switch (action.type) {
        case 'CHANGE_OVERLAY_ACTIVE': {
            return {
                ...state,
                active: action.active
            };
        }
        case 'CHANGE_OVERLAY_SRC': {
            return {
                ...state,
                src: action.src
            };
        }
        case 'CHANGE_OVERLAY_SCALE': {
            return {
                ...state,
                scale: action.scale/100
            };
        }

        default: return state;
    }
}
