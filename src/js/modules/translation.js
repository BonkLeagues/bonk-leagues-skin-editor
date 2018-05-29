export default function(e, state) {
    var scaleFactor = 30/700;

    if (state.scaling) {
        var { shapeRect, editingShape } = state;

        var centerX = window.innerWidth/2 + 175 - shapeRect.width/2;
        var centerY = window.innerHeight/2 - shapeRect.height/2;

        var { position, hf, vf } = editingShape.state;
        var originalOrigin = editingShape.props.origin;

        var flippedOrigin = {
            x: hf ? (shapeRect.width - originalOrigin.x) : originalOrigin.x,
            y: vf ? (shapeRect.height - originalOrigin.y) : originalOrigin.y
        };

        var origin = {
            x: centerX + flippedOrigin.x + parseFloat(position.x) * state.zoom,
            y: centerY + flippedOrigin.y + parseFloat(position.y) * state.zoom
        };
        var dragger = {
            x: state.originalPos.x - state.panBy.x,
            y: state.originalPos.y - state.panBy.y
        };

        var cursorPos = {
            x: e.clientX - state.panBy.x,
            y: e.clientY - state.panBy.y
        };

        var cursorDiff = {
            x: (cursorPos.x - origin.x) / state.zoom,
            y: (cursorPos.y - origin.y) / state.zoom
        };
        var draggerDiff = {
            x: dragger.x - origin.x,
            y: dragger.y - origin.y
        };

        var cursorAngle = Math.atan(cursorDiff.x/cursorDiff.y);
        var draggerAngle = Math.atan(draggerDiff.x/draggerDiff.y);
        var finalAngle = draggerAngle - cursorAngle;

        var cursorDist = cursorDiff.x**2 + cursorDiff.y**2;
        var draggerDist = draggerDiff.x**2 + draggerDiff.y**2;

        var fixFlipping = (Math.sign(dragger.y - origin.y) === Math.sign(cursorPos.y - origin.y)) ? 0 : 180;

        editingShape.setState({
            rotation: parseFloat(editingShape.props.rotation) + (e.shiftKey ? 0 : (finalAngle * 180/Math.PI + fixFlipping)),
            scale: editingShape.props.scale * (e.ctrlKey ? 1 : Math.sqrt(cursorDist/draggerDist) * state.zoom)
        });
    } else if (state.moving) {
        var { originalPos, editingShape } = state;
        var { position } = editingShape.props;

        editingShape.setState({
            position: {
                x: position.x + (e.ctrlKey ? 0 : (e.clientX - originalPos.x) / state.zoom),
                y: position.y + (e.shiftKey ? 0 : (e.clientY - originalPos.y) / state.zoom),
            }
        });
    }
}
