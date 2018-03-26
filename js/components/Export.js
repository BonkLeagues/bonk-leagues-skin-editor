import React from 'react';
import { connect } from 'react-redux';

var Export = ({ skinCode, shapeObj, onClick }) => (
    <div onMouseEnter={()=>{skinCode && onClick(shapeObj)}} style={{height: skinCode ? '137px' : '27px'}} className="export">
        <button onClick={()=>onClick(shapeObj)}>Save Skin</button>
        {
            skinCode &&
            <div className="skin-codes">
                <div><a href={"https://bonkleagues.github.io/skins.html#Skin|Bonk Leagues Skin Editor|"+encodeURIComponent(skinCode)} target="_blank">Save to Skin Manager</a></div>
                - or use the skin code: -
                <input type="text" id="export-txt" onClick={()=>document.getElementById('export-txt').select()} value={skinCode} readOnly />
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
