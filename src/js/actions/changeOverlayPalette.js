import palette from 'get-rgba-palette';
import pixels from 'get-image-pixels';

import colors from '../modules/colors';

var colorsRGB = colors.map(color => {
    // Matches string starting with '#' and three pairs of bytes (a hex colour)
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);

    // Converts hex to rgb
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
});

export default el => {
    return dispatch => {
        if (el) {
            // Get palette colours in image (not bonk colours)
            var paletteColors = palette(pixels(el)).map(color => {
                var currentColor = '';
                var closestMatch = 256 * 256 * 256;

                for (var i = 0; i < colorsRGB.length; i++) {
                    // This number is small if the colours are similar, and big if they are different
                    var match = Math.sqrt(
                        (colorsRGB[i].r - color[0]) ** 2 +
                        (colorsRGB[i].g - color[1]) ** 2 +
                        (colorsRGB[i].b - color[2]) ** 2
                    );

                    // Ensures that closestMatch is the smallest value (aka the most closely matching colour)
                    if (match < closestMatch) {
                        currentColor = colors[i];
                        closestMatch = match;
                    }
                }

                return currentColor;
            });

            // Set the overlay palette
            return dispatch({
                type: 'CHANGE_OVERLAY_PALETTE',
                palette: paletteColors
            });
        }
    }
}
