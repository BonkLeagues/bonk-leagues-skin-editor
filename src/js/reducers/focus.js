export default function(state=false, action) {
    switch (action.type) {
        case 'SET_FOCUS': {
            return action.focus;
        }

        default: return state;
    }
}
