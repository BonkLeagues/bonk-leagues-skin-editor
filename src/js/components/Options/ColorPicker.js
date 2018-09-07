import React from 'react';

import colors from '../../modules/colors';
import Color from '../Color';

export default ({ highlightColor }) => (
    <div className="color-picker">
        {
            // Maps each colour to a component (also passes in if it's selected via 'highlight')
            colors.map((color, i) =>
                <Color color={color} highlight={color === highlightColor} key={i} />
            )
        }
    </div>
);
