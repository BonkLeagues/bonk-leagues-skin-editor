export default dispatch => {
    // Fetch all shapes from Bonk Leagues server
    return fetch('https://bonkleaguebot.herokuapp.com/shapes.txt')
    .then(response => response.text())
    .then(shapes => {
        shapes = shapes
        // Add viewBox to make SVG shape display correctly
        .replace(/height\=\"(.+?)px\" width\=\"(.+?)px\"/g, `
            height="$1px" width="$2px"
            viewBox="0 0 $2 $1"
        `)
        .replace(/width\=\"(.+?)\" height\=\"(.+?)\"/g, `
            width="$1" height="$2"
            viewBox="0 0 $1 $2"
        `);

        // Loads all shapes into Redux state
        dispatch({
            type: 'LOAD_SHAPES',
            shapes
        });
    });
}
