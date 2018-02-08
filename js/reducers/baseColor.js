export default function(state='fafafa', action) {
    switch (action.type) {
        case 'CHANGE_BASE_COLOR': {
            return action.color;
        }

        default: return state;
    }
}
