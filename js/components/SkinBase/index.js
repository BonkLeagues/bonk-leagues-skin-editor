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
            moveOffset: {
                x: null,
                y: null
            },

            keyDown: false
        };
    }

    onShapeDown = (e, moveableShape) => {
        this.setState({
            moving: true,
            editingShape: moveableShape,
            shapeRect: moveableShape.state.rect,
            moveOffset: {
                x: e.clientX - moveableShape.state.position.x,
                y: e.clientY - moveableShape.state.position.y,
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
    onMouseMove = e => {
        doTranslation(e, this.state);
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
    }

    render() {
        return (
            <div className="base-panel"
                onMouseDown={this.props.anySelected ? this.props.onClick : undefined}
                onMouseMove={this.onMouseMove}
                onMouseUp={this.onMouseUp}
            >
                <ShapeCount />
                <div className="base" style={{
                    background: '#'+this.props.baseColor,
                    overflow: this.props.anySelected ? 'visible' : 'hidden'
                }}>
                    {this.props.shapes.map((shape, i) =>
                        <MoveableShape
                            shape={shape}
                            onShapeDown={this.onShapeDown}
                            onDraggerDown={this.onDraggerDown}
                            name={shape.name}
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
        onClick: () => {
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
