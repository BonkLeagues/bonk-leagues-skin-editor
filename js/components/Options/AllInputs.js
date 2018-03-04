import React from 'react';

import OptionsInput from './OptionsInput';
import OptionsCheckbox from './OptionsCheckbox';

export default () => (
    <div>
        <OptionsInput type="scale" />
        <OptionsInput type="rotation" />
        <OptionsInput type="position.x" />
        <OptionsInput type="position.y" />

        <div className="checkboxes">
            <OptionsCheckbox type="hf" />
            <OptionsCheckbox type="vf" />
        </div>
    </div>
);
