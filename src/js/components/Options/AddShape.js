import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import DialogShape from './DialogShape';

import shapeNames from '../../modules/shapeNames';

class AddShape extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dialog: false,
            searchText: ''
        };
    }

    toggleDialog = () => {
        this.setState({
            dialog: !this.state.dialog
        });
    }

    onSearchChange = e => {
        this.setState({
            searchText: e.target.value
        });
    }

    render() {
        var size = 41;

        var searchText = this.state.searchText.toLowerCase();

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
                    <div className="search">
                        <input 
                            onChange={this.onSearchChange}
                            ref={input => input && input.focus()}
                            placeholder="Search..."
                            type="text"
                        />
                    </div>

                    <Scrollbars
                        style={{
                            width: '320px',
                            height: '256px'
                        }}
                        renderTrackVertical={props => <div {...props} className="track-vertical" />}
                        renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
                    >
                        <div className="add-dialog">
                            {this.props.shapes.map((shape, i) =>
                                shapeNames[i].toLowerCase().indexOf(searchText) > -1 &&
                                <DialogShape
                                    shape={shape}
                                    color="ccc"
                                    size={size}
                                    toggleDialog={this.toggleDialog}
                                    id={i} key={i}
                                />
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
