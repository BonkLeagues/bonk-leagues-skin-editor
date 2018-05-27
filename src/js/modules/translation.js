export default function(e, state) {
    var scaleFactor = 30/700;
    if (state.scaling) {
        var { shapeRect } = state;

        var centerX = window.innerWidth/2 + 175 - shapeRect.width/2;
        var centerY = window.innerHeight/2 - shapeRect.height/2;

        var { position, hf, vf } = state.editingShape.state;
        var originalOrigin = state.editingShape.props.origin;

        var flippedOrigin = {
            x: hf ? (shapeRect.width - originalOrigin.x) : originalOrigin.x,
            y: vf ? (shapeRect.height - originalOrigin.y) : originalOrigin.y
        };

        var origin = {
            x: centerX + flippedOrigin.x + parseFloat(position.x),
            y: centerY + flippedOrigin.y + parseFloat(position.y)
        };
        var dragger = {
            x: centerX + shapeRect.width + parseFloat(position.x),
            y: centerY + shapeRect.height + parseFloat(position.y)
        };

        var cursorPos = {
            x: ((e.clientX - centerX - originalOrigin.x) / state.zoom) + centerX + originalOrigin.x - (state.panBy.x / state.zoom),
            y: ((e.clientY - centerY - originalOrigin.y) / state.zoom) + centerY + originalOrigin.y - (state.panBy.y / state.zoom)
        };

        var cursorDiff = {
            x: cursorPos.x - origin.x,
            y: cursorPos.y - origin.y
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

        state.editingShape.setState({
            rotation: e.shiftKey ? state.editingShape.props.rotation : finalAngle * 180/Math.PI + ((cursorPos.y < origin.y) ? 180 : 0),
            scale: e.ctrlKey ? state.editingShape.props.scale : Math.sqrt(cursorDist/draggerDist)
        });
    } else if (state.moving) {
        var { originalPos } = state;
        var { position } = state.editingShape.props;

        state.editingShape.setState({
            position: {
                x: position.x + (e.ctrlKey ? 0 : (e.clientX - originalPos.x) / state.zoom),
                y: position.y + (e.shiftKey ? 0 : (e.clientY - originalPos.y) / state.zoom),
            }
        });
    }
}
