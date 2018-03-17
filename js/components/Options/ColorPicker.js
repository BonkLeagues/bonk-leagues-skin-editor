import React from 'react';

import colors from '../../modules/colors';
import Color from '../Color';

export default () => (
    <div className="color-picker">
        {colors.map((color, i) =>
            <Color color={color} key={i} />
        )}
    </div>
);
