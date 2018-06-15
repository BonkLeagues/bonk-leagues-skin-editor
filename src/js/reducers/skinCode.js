import { objectToSkinCode } from '../modules/skinCode';

function getCookie(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export default function(state='', action) {
    switch (action.type) {
        case 'GENERATE_SKIN_CODE': {
            var skinCode = objectToSkinCode({
                baseColor: action.obj.baseColor,
                shapes: [...action.obj.shapes]
            });

            if (action.save) localStorage.setItem('skinCode', skinCode);
            if (action.export) {
                var username = getCookie('rmUn') || 'Bonk Leagues Skin Editor';

                window.open( 'https://bonkleagues.github.io/skins.html#Skin|' + username + '|' + encodeURIComponent(skinCode) );
            }

            return skinCode;
        }

        default: return state;
    }
}
