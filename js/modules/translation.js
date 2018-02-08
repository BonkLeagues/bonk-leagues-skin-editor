export default function(e, state) {
    var scaleFactor = 30/700;
    if (state.scaling) {
        var shapeRect = state.shapeRect;
        var position = state.editingShape.state.position;

        var origin = {
            x: shapeRect.x + shapeRect.width/2 + parseFloat(position.x),
            y: shapeRect.y + shapeRect.height/2 + parseFloat(position.y)
        };
        var dragger = {
            x: shapeRect.x + shapeRect.width + parseFloat(position.x),
            y: shapeRect.y + shapeRect.height + parseFloat(position.y)
        };

        var cursorDiff = {
            x: e.clientX - origin.x,
            y: e.clientY - origin.y
        };
        var draggerDiff = {
            x: dragger.x - origin.x,
            y: dragger.y - origin.y
        };

        var cursorAngle = Math.atan(cursorDiff.x/cursorDiff.y);
        var draggerAngle = Math.atan(draggerDiff.x/draggerDiff.y);
        var finalAngle = draggerAngle - cursorAngle;

        var cursorDist = cursorDiff.x*cursorDiff.x + cursorDiff.y*cursorDiff.y;
        var draggerDist = draggerDiff.x*draggerDiff.x + draggerDiff.y*draggerDiff.y;

        state.editingShape.setState({
            rotation: e.shiftKey ? state.editingShape.props.rotation : finalAngle * 180/Math.PI + ((e.clientY < origin.y) ? 180 : 0),
            scale: (e.ctrlKey ? state.editingShape.props.scale : Math.sqrt(cursorDist/draggerDist))
        });
    } else if (state.moving) {
        var moveOffset = state.moveOffset;

        state.editingShape.setState({
            position: {
                x: (e.clientX - moveOffset.x),
                y: (e.clientY - moveOffset.y)
            }
        });
    }
}
