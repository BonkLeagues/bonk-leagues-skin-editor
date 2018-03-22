export default function(e, state) {
    var scaleFactor = 30/700;
    if (state.scaling) {
        var { shapeRect } = state;

        var centerX = window.innerWidth/2 + 175 - shapeRect.width/2;
        var centerY = window.innerHeight/2 - shapeRect.height/2;

        var { position, hf, vf } = state.editingShape.state;
        var origin = state.editingShape.props.origin;

        var flippedOrigin = {
            x: hf ? (shapeRect.width - origin.x) : origin.x,
            y: vf ? (shapeRect.height - origin.y) : origin.y
        };

        var origin = {
            x: centerX + flippedOrigin.x + parseFloat(position.x),
            y: centerY + flippedOrigin.y + parseFloat(position.y)
        };
        var dragger = {
            x: centerX + shapeRect.width + parseFloat(position.x),
            y: centerY + shapeRect.height + parseFloat(position.y)
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
