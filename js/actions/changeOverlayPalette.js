import palette from 'get-rgba-palette';
import pixels from 'get-image-pixels';

import colors from '../modules/colors';
var colorsRGB = colors.map(color => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
});

export default el => {
    return dispatch => {
        if (el) {
            var paletteColors = palette(pixels(el)).map(color => {
                var currentColor = '';
                var closestMatch = 256*256*256;
                for (var i=0;i< colorsRGB.length;i++) {
                    var match = Math.sqrt(
                        (colorsRGB[i].r - color[0])**2 +
                        (colorsRGB[i].g - color[1])**2 +
                        (colorsRGB[i].b - color[2])**2
                    );
                    if (match < closestMatch) {
                        currentColor = colors[i];
                        closestMatch = match;
                    }
                }
                return currentColor;
            });
            return dispatch({
                type: 'CHANGE_OVERLAY_PALETTE',
                palette: paletteColors
            });
        }
    }
}
