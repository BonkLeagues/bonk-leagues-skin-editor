import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import DialogShape from './DialogShape';

import shapeNames from '../../modules/shapeNames';
import shapeCategories from '../../modules/shapeCategories';

class AddShape extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            searchText: ''  // Used for the search box
        };
    }

    toggleDialog = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    // Triggers when the value of the search box changes
    onSearchChange = e => {
        this.setState({
            searchText: e.target.value
        });
    }

    processShapes = shapes => {
        var shapeSize = 31;

        // Maps each shape object to a component
        return shapes
            .map(shape => {
                var shapeID = shapeNames.indexOf(shape);
                var shapeSVG = this.props.shapes[shapeID];

                if (!shapeSVG) return null;

                return (
                    <DialogShape
                        shape={shapeSVG}
                        color="ccc"
                        size={shapeSize}
                        toggleDialog={this.toggleDialog}
                        id={shapeID} key={shapeID}
                    />
                );
            })
    }

    render() {
        var searchText = this.state.searchText.toLowerCase();
        var filteredCategories = 
            shapeCategories
            .map(category => {
                return {
                    name: category.name,
                    shapes: this.processShapes(
                        category.shapes
                        .filter(shape => shape.toLowerCase().indexOf(searchText) > -1)  // Filters based on search
                    )
                };
            })
            .filter(category => category.shapes.length > 0);    // Removes empty categories

        // Maps each category object to an element
        var categories =
            filteredCategories
            .map((category, i) =>
                <div className="category" key={i}>
                    <h2>{category.name}</h2>
                    {category.shapes}
                </div>
            );

        // CSS for open and closed dialog
        var dialogOpen = {
            width: '320px',
            height: '300px',
            top: '4px'
        };
        var dialogClose = {
            width: '30px',
            height: '16px',
            top: '30px'
        };

        return (
            <div className="add-shape">
                <div className="add-dialog-wrapper" style={this.state.visible ? dialogOpen : dialogClose}>
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
                            {
                                this.props.shapes.length > 0 &&
                                categories
                            }
                        </div>
                    </Scrollbars>
                </div>

                <button className="add-button" title="Add Shape" onClick={this.toggleDialog}>+</button>
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
