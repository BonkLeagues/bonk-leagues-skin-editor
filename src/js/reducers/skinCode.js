import { objectToSkinCode } from '../modules/skinCode';

export default function(state='', action) {
    switch (action.type) {
        case 'GENERATE_SKIN_CODE': {
            var skinCode = objectToSkinCode({
                baseColor: action.obj.baseColor,
                shapes: [...action.obj.shapes]
            });

            if (action.save) localStorage.setItem('skinCode', skinCode);
            if (action.export) window.open(
                'https://bonkleagues.github.io/skins.html#Skin|Bonk Leagues Skin Editor|' + 
                encodeURIComponent(skinCode)
            );

            return skinCode;
        }

        default: return state;
    }
}
