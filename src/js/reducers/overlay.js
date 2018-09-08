export default function(state={active: true, scale: 1}, action) {
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

        default: return state;
    }
}
