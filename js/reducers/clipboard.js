import uuidv1 from 'uuid/v1';

export default function(state={}, action) {
    switch (action.type) {
        case 'COPY_TO_CLIPBOARD': {
            return {...action.shape, uuid: uuidv1()};
        }
        case 'CHANGE_CLIPBOARD_UUID': {
            return {...state, uuid: uuidv1()};
        }

        default: return state;
    }
}
