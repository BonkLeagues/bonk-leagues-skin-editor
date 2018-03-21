import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import DialogShape from './DialogShape';

class AddShape extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dialog: false
        };
    }

    toggleDialog = () => {
        this.setState({
            dialog: !this.state.dialog
        });
    }

    render() {
        var size = 41;
        return (
            <div className="add-shape">
                <div className="add-dialog-wrapper" style={this.state.dialog ? {
                    width: '320px',
                    height: '300px',
                    top: '4px'
                } : {
                    width: '30px',
                    height: '16px',
                    top: '30px'
                }}>
                    <Scrollbars
                        style={{
                            width: '320px',
                            height: '300px'
                        }}
                        renderTrackVertical={props => <div {...props} className="track-vertical" />}
                        renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
                    >
                        <div className="add-dialog">
                            {this.props.shapes.map((shape, i) =>
                                <DialogShape shape={
                                    shape
                                    .replace(/fill\=\".+?\"/g, 'fill="#fff"')
                                    .replace(/height\=\".+?px\" width\=\".+?px\"/, 'height="'+size+'px" width="'+size+'px"')
                                    .replace(/width\=\".+?\" height\=\".+?\"/, 'width="'+size+'" height="'+size+'"')
                                } toggleDialog={this.toggleDialog} id={i} key={i} />
                            )}
                        </div>
                    </Scrollbars>
                </div>
                <button className="add-button" onClick={this.toggleDialog}>+</button>
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    return {
        shapes: state.allShapes
    };
};

export default connect(mapStateToProps)(AddShape);
