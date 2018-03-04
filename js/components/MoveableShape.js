import React from 'react';
import { connect } from 'react-redux';
import keydown from 'react-keydown';

class MoveableShape extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rect: null,
            ...this.props.shape
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            ...newProps
        });
    }

    render() {
        var scaleFactor = 700/30;

        var selected = this.props.shape.selected;
        var topLayer = selected && this.props.topLayer;

        return (
            <div className={"shape" + (selected?" selected":"") + (topLayer?" top":"")}
                onMouseDown={e => {
                    e.stopPropagation();
                    !this.props.shape.selected && this.props.onClick();
                }}
                style={{
                    transform: `
                        translate(`+this.state.position.x+`px,`+this.state.position.y+`px)
                        translate(-50%,-50%)
                        rotate(`+this.state.rotation+`deg)
                        scale(`+this.state.scale+`)
                    `
                }}
            ref={shape=>{
                if (shape && !this.state.rect) {
                    this.setState({
                        rect: shape.getBoundingClientRect()
                    });
                }
            }}>
                <span className={(this.state.hf?'hf':'')+' '+(this.state.vf?'vf':'')} onMouseDown={e=>this.props.onShapeDown(e,this)} dangerouslySetInnerHTML={{__html: this.props.shapeHTML}}></span>
                {
                    this.props.shape.selected &&
                    <div className="dragger" onMouseDown={()=>this.props.onDraggerDown(this)}></div>
                }
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    return {
        shapeHTML:
        state.allShapes[props.shape.shapeID]
        .replace(/fill\=\".+?\"/g, 'fill="#'+(props.shape.color || '000')+'"'),
        ...props.shape,
        topLayer: state.topLayer
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: e => {
            dispatch({
                type: 'SELECT_SHAPE',
                id: props.shape.uuid
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoveableShape);
