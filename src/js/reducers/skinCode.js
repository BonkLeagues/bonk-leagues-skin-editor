import { objectToSkinCode } from '../modules/skinCode';

export default function(state='', action) {
    switch (action.type) {
        case 'GENERATE_SKIN_CODE': {
            var skinCode = objectToSkinCode({
                baseColor: action.obj.baseColor,
                shapes: [...action.obj.shapes]
            });

            localStorage.setItem('skinCode', skinCode);
            return skinCode;
        }

        default: return state;
    }
}
