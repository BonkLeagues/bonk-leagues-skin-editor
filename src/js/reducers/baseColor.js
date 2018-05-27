export default function(state='fafafa', action) {
    switch (action.type) {
        case 'CHANGE_BASE_COLOR': {
            return action.color;
        }

        case 'DELETE_ALL': {
            return 'fafafa';
        }

        default: return state;
    }
}
