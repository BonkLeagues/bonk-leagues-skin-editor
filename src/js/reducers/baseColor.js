export default function(state={color: 'fafafa'}, action) {
    switch (action.type) {
        case 'DISABLE_BASE_PREVIEW_COLOR': {
            return {
                ...state,
                previewColorEnabled: false
            };
        }
        case 'CHANGE_BASE_COLOR': {
            return {
                ...state,
                color: action.color
            };
        }
        case 'CHANGE_BASE_PREVIEW_COLOR': {
            return {
                ...state,
                previewColor: action.color,
                previewColorEnabled: true
            };
        }
        case 'REMOVE_BASE_PREVIEW_COLOR': {
            return {
                ...state,
                previewColor: null
            };
        }

        case 'DELETE_ALL': {
            return {
                color: 'fafafa'
            };
        }

        default: return state;
    }
}
