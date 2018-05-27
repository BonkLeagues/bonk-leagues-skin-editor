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
            moving: false,
            scaling: false,
            editingShape: null,
            shapeRect: null,
            originalPos: {
                x: null,
                y: null
            },

            keyDown: false,

            zoom: 1,
            panning: false,
            panBy: {
                x: 0,
                y: 0
            }
        };
    }

    onShapeDown = (e, moveableShape) => {
        this.setState({
            moving: true,
            editingShape: moveableShape,
            shapeRect: moveableShape.state.rect,
            originalPos: {
                x: e.clientX,
                y: e.clientY,
            }
        });
    }
    onDraggerDown = moveableShape => {
        this.setState({
            scaling: true,
            editingShape: moveableShape,
            shapeRect: moveableShape.state.rect
        });
    }

    onMouseDown = e => {
        if (this.props.anySelected) this.props.deselectAll();

        if (e.ctrlKey) this.setState({
            panning: true,
            originalPos: {
                x: e.clientX - this.state.panBy.x,
                y: e.clientY - this.state.panBy.y
            }
        });
    }
    onMouseMove = e => {
        if (this.state.panning) {
            this.setState({
                panBy: {
                    x: e.clientX - this.state.originalPos.x,
                    y: e.clientY - this.state.originalPos.y,
                }
            });
        } else {
            doTranslation(e, this.state);
        }
    }
    onMouseUp = () => {
        if (this.state.moving || this.state.scaling) {
            this.props.changeShapeTranslation(this.state);
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
        e.preventDefault();
        if (e.ctrlKey) {
            var sensitivity = 1/1500;
            var newZoom = this.state.zoom - (e.deltaY * this.state.zoom * sensitivity);

            this.setState({
                zoom: newZoom
            });
        }
    }

    render() {
        return (
            <div className="base-panel"
                onMouseDown={this.onMouseDown}
                onMouseMove={this.onMouseMove}
                onMouseUp={this.onMouseUp}
                onWheel={this.onMouseScroll}
            >
                <ShapeCount />
                <div className="base" style={{
                    background: '#'+this.props.baseColor,
                    overflow: this.props.anySelected ? 'visible' : 'hidden',
                    transform: `
                        translate(-50%, -50%)
                        translate(`+this.state.panBy.x+`px, `+this.state.panBy.y+`px)
                        scale(`+this.state.zoom+`)
                    `
                }}>
                    {this.props.shapes.map((shape, i) =>
                        <MoveableShape
                            shape={shape}
                            onShapeDown={this.onShapeDown}
                            onDraggerDown={this.onDraggerDown}
                            name={shape.name}
                            zoom={this.state.zoom}
                            key={shape.uuid}
                        />
                    )}
                    <Overlay />
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
        anySelected: state.shapes.present.filter(shape => shape.selected).length > 0
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        deselectAll: () => {
            dispatch(deselectAll);
        },

        changeShapeTranslation: state => {
            var shapeTranslation = state.editingShape.state;
            dispatch({
                type: 'CHANGE_SHAPE_TRANSLATION',
                ...shapeTranslation
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SkinBase);
