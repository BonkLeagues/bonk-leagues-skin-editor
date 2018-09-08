import React from 'react';
import { connect } from 'react-redux';

import ShapeCount from './ShapeCount';
import MoveableShape from './MoveableShape';
import Overlay from './Overlay';
import OverlayPanel from './OverlayPanel';

import deselectAll from '../../actions/deselectAll';

import doTranslation from '../../modules/translation';

class SkinBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            originalPos: {
                x: 0,
                y: 0
            },

            zoom: 1,
            panBy: {
                x: 0,
                y: 0
            }
        };
    }

    onShapeDown = (e, moveableShape) => {
        if (e.button === 0 && !moveableShape.props.shape.locked) {  // Left mouse button
            this.setState({
                moving: true,
                editingShape: moveableShape,
                shapeRect: moveableShape.state.rect,
                originalPos: {
                    x: e.clientX,
                    y: e.clientY
                }
            });
            moveableShape.setState({
                moving: true
            });
        } else {
            this.onMouseDown(e);
        }
    }
    onDraggerDown = (e, moveableShape) => {
        if (e.button === 0 && !moveableShape.props.shape.locked) {  // Left mouse button
            // Sets scaling to true (includes scaling AND rotating)
            this.setState({
                scaling: true,
                editingShape: moveableShape,
                shapeRect: moveableShape.state.rect,
                originalPos: {
                    x: e.clientX,
                    y: e.clientY
                }
            });
        } else {
            this.onMouseDown(e);
        }
    }

    onMouseDown = e => {
        e.preventDefault();
        if (e.button === 1) {   // Middle mouse
            this.setState({
                panning: true,
                originalPos: {
                    x: e.clientX - this.state.panBy.x,
                    y: e.clientY - this.state.panBy.y
                }
            });
        } else {
            if (this.props.anySelected) this.props.deselectAll();
        }
    }
    onMouseMove = e => {
        // Handle panning or moving/scaling shapes
        if (this.state.panning) {
            this.setState({
                panBy: {
                    x: e.clientX - this.state.originalPos.x,
                    y: e.clientY - this.state.originalPos.y,
                }
            });
        } else {
            var { editingShape } = this.state;
            
            if (editingShape) {
                var shapeSelected = editingShape.props.shape.selected;

                // If it's an overlay, don't move it
                if (editingShape.props.overlay && !shapeSelected) return;
            }

            doTranslation(e, this.state);
        }
    }
    onMouseUp = () => {
        if (this.state.moving || this.state.scaling) {
            this.props.changeShapeTranslation(this.state);

            this.state.editingShape.setState({
                moving: false
            });
            this.setState({
                moving: false,
                scaling: false,
                editingShape: null
            });
        }

        this.setState({
            panning: false
        });
    }

    onMouseScroll = e => {
        if (e.ctrlKey) {
            e.preventDefault();
            
            // Calculates the new zoom level and how much to pan by

            var sensitivity = 1/1500;
            var newZoom = this.state.zoom - (e.deltaY * this.state.zoom * sensitivity);

            var zoomRatio = newZoom / this.state.zoom;

            var center = {
                x: window.innerWidth/2 + 175 + this.state.panBy.x,
                y: window.innerHeight/2 + this.state.panBy.y
            };
            var cursorDiff = {
                x: e.clientX - center.x,
                y: e.clientY - center.y
            };

            this.setState({
                zoom: newZoom,
                panBy: {
                    x: this.state.panBy.x + cursorDiff.x * (1 - zoomRatio),
                    y: this.state.panBy.y + cursorDiff.y * (1 - zoomRatio)
                }
            });
        }
    }

    render() {
        // Set base colour to the correct display colour

        var baseColor = this.props.baseColor.color;

        if (this.props.baseColor.previewColorEnabled) {
            baseColor = this.props.baseColor.previewColor || this.props.baseColor.color;
        }

        // Maps all the shape objects to components
        var shapes =
            this.props.shapes.map((shape, i) =>
                <MoveableShape
                    shape={shape}
                    onShapeDown={this.onShapeDown}
                    onDraggerDown={this.onDraggerDown}
                    name={shape.name}
                    zoom={this.state.zoom}
                    key={shape.uuid}
                />
            );

        // CSS transforms for zoom and pan
        var transformString = `
            translate(-50%, -50%)
            translate(` + this.state.panBy.x + `px, ` + this.state.panBy.y + `px)
            scale(` + this.state.zoom + `)
        `;

        return (
            <div className="base-panel"
                onMouseDown={this.onMouseDown}
                onMouseMove={this.onMouseMove}
                onMouseUp={this.onMouseUp}
                onWheel={this.onMouseScroll}
            >
                <ShapeCount />

                <div className="base" style={{
                    background: '#' + baseColor,
                    overflow: this.props.anySelected ? 'visible' : 'hidden',
                    transform: transformString
                }}>
                    {shapes}
                    <Overlay
                        onShapeDown={this.onShapeDown}
                        onDraggerDown={this.onDraggerDown}
                        zoom={this.state.zoom}
                    />
                </div>

                <OverlayPanel />
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    return {
        baseColor: state.baseColor.present,
        shapes: state.shapes.present,
        anySelected:
            state.shapes.present.filter(shape => shape.selected).length > 0 ||
            state.overlay.present.selected  // Account for overlay
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        deselectAll: () => {
            dispatch(deselectAll);
        },

        changeShapeTranslation: state => {
            var shapeState = state.editingShape.state;

            if (shapeState.overlay) {
                dispatch({
                    type: 'CHANGE_OVERLAY_TRANSLATION',
                    ...shapeState
                });
            } else {
                dispatch({
                    type: 'CHANGE_SHAPE_TRANSLATION',
                    ...shapeState
                });
            }
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SkinBase);
