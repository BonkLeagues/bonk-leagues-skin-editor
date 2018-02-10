export default dispatch => {
    return fetch('http://bonkleaguebot.herokuapp.com/shapes.txt')
    .then(response => response.text())
    .then(shapes => {
        shapes = shapes
        .replace(/height\=\"(.+?)px\" width\=\"(.+?)px\"/g, `
            height="$1px" width="$2px"
            viewBox="0 0 $2 $1"
        `)
        .replace(/width\=\"(.+?)\" height\=\"(.+?)\"/g, `
            width="$1" height="$2"
            viewBox="0 0 $1 $2"
        `);

        dispatch({
            type: 'LOAD_SHAPES',
            shapes
        });
    })
    .catch(err => {
        dispatch({
            type: 'LOAD_SHAPES_ERROR',
            err
        });
    });
}
