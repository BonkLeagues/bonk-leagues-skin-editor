import { objectToSkinCode } from '../modules/skinCode';

export default function(state='', action) {
    switch (action.type) {
        case 'GENERATE_SKIN_CODE': {
            return objectToSkinCode({
                baseColor: action.obj.baseColor,
                shapes: [...action.obj.shapes]
            });
        }

        default: return state;
    }
}
