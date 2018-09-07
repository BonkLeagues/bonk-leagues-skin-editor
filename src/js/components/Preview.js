import React from 'react';
import { connect } from 'react-redux';

import { objectToSkinCode } from '../modules/skinCode';

class Preview extends React.Component {
    render() {
        var { skinData } = this.props;

        // Converts the skin object to a skin code
        var skinCode = objectToSkinCode({
            baseColor: skinData.baseColor.color,
            shapes: skinData.shapes
        });
        
        // URL for the rendered skin
        var imgUrl = 'https://bonkleaguebot.herokuapp.com/avatar.svg?skinCode=' + encodeURIComponent(skinCode);

        return (
            <div className="preview-wrapper"
                style={{
                    pointerEvents: this.props.isVisible ? 'auto' : 'none',
                    opacity: this.props.isVisible ? 1 : 0
                }}
                onClick={this.props.hidePreview}
            >
                <div className="preview">
                    <div className="editor size">
                        <h1>Editor Size</h1>
                        <img src={imgUrl} alt="Editor Size" draggable="false" />
                    </div>
                    <div className="win-screen size">
                        <h1>Win Screen Size</h1>
                        <img src={imgUrl} alt="Win Screen Size" draggable="false" />
                    </div>
                    <div className="ingame size">
                        <h1>In-game Size</h1>
                        <img src={imgUrl} alt="In-game Size" draggable="false" />
                    </div>
                </div>
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    return {
        skinData: {
            shapes: state.shapes.present,
            baseColor: state.baseColor.present
        }
    };
}

export default connect(mapStateToProps)(Preview);
