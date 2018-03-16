import React from 'react';
import { connect } from 'react-redux';

var Export = ({ skinCode, shapeObj, onClick }) => (
    <div onMouseEnter={()=>{skinCode && onClick(shapeObj)}} style={{height: skinCode ? '100px' : '25px'}} className="export">
        <button onClick={()=>onClick(shapeObj)}>Generate Skin Code</button>
        {
            skinCode &&
            <div className="skin-codes">
                <input type="text" value={skinCode} readOnly />
                <div>or <a href={"https://bonkleagues.github.io/skins.html#Untitled|Bonk Leagues Skin Editor|"+encodeURIComponent(skinCode)} target="_blank">click here</a></div>
            </div>
        }
    </div>
);

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
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Export);
