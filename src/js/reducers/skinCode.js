import { objectToSkinCode } from '../modules/skinCode';

// Gets a cookie's value from the name
function getCookie(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export default function(state='', action) {
    switch (action.type) {
        case 'GENERATE_SKIN_CODE': {
            // Convert the skin object to a skin code
            var skinCode = objectToSkinCode({
                baseColor: action.skinData.baseColor.color,
                shapes: action.skinData.shapes
            });

            // Saves the skin to localStorage
            if (action.save) localStorage.setItem('skinCode', skinCode);

            // Opens an export tab
            if (action.export) {
                var username = getCookie('rmUn') || 'Bonk Leagues Skin Editor';

                window.open( 'https://bonkleagues.github.io/skins.html#Skin|' + username + '|' + encodeURIComponent(skinCode) );
            }

            return skinCode;
        }

        default: return state;
    }
}
