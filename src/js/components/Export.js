import React from 'react';
import { connect } from 'react-redux';

class Export extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confirmDelete: false
        };
    }

    confirmDelete = () => {
        if (this.state.confirmDelete) {
            this.props.deleteAll();
            this.cancelDelete();
        } else {
            this.setState({
                confirmDelete: true
            });
        }
    }
    cancelDelete = () => {
        this.setState({
            confirmDelete: false
        });
    }

    render() {
        return (
            <div
                onMouseEnter={()=>{this.props.skinCode && this.props.onClick(this.props.shapeObj)}}
                onMouseLeave={this.cancelDelete}
                style={{
                    height: this.props.skinCode ? '190px' : '27px'
                }}
                className="export"
            >
                <button onClick={()=>this.props.onClick(this.props.shapeObj)}>Save Skin</button>
                {
                    this.props.skinCode &&
                    <div className="skin-codes">
                        <div><a href={"https://bonkleagues.github.io/skins.html#Skin|Bonk Leagues Skin Editor|"+encodeURIComponent(this.props.skinCode)} target="_blank">Save to Skin Manager</a></div>
                        - or use the skin code: -
                        <input type="text" onClick={e=>e.target.select()} value={this.props.skinCode} readOnly />
                        <button onClick={this.confirmDelete} style={{marginTop: '20px'}}>
                            {this.state.confirmDelete ? "Sure?" : 'Erase Skin'}
                        </button>
                    </div>
                }
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    return {
        skinCode: state.skinCode,
        shapeObj: {
            baseColor: state.baseColor.present,
            shapes: state.shapes.present
        }
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: shapeObj => {
            dispatch({
                type: 'GENERATE_SKIN_CODE',
                obj: shapeObj
            });
        },

        deleteAll: shapeObj => {
            dispatch({type: 'DELETE_ALL'});
            dispatch({
                type: 'GENERATE_SKIN_CODE',
                obj: shapeObj
            });
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Export);
