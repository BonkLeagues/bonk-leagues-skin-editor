import React from 'react';

export default ({ shape, color, size }) => {
    shape = shape
    .replace(/fill\=\".+?\"/g, 'fill="#'+color+'"')
    .replace(/height\=\".+?px\" width\=\".+?px\"/, 'height="'+size+'px" width="'+size+'px"')
    .replace(/width\=\".+?\" height\=\".+?\"/, 'width="'+size+'" height="'+size+'"')

    return (
        <div dangerouslySetInnerHTML={{__html: shape}}></div>
    );
};