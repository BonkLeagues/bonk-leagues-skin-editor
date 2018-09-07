import React from 'react';

export default ({ shape, color, size }) => {
    // Returns a general shape icon

    var shapeIcon =
        shape
        .replace(/fill\=\".+?\"/g, 'fill="#'+color+'"')
        .replace(/height\=\".+?px\" width\=\".+?px\"/, 'height="'+size+'px" width="'+size+'px"')
        .replace(/width\=\".+?\" height\=\".+?\"/, 'width="'+size+'" height="'+size+'"');

    return (
        <div dangerouslySetInnerHTML={{__html: shapeIcon}}></div>
    );
};