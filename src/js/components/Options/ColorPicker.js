import React from 'react';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';

import colors from '../../modules/colors';
import Color from '../Color';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customColors: true,
        };
    }

    handleChange = color => {
        this.props.changePreviewColor(this.props.anySelected, color.hex.replace('#', ''));
    }

    handleChangeComplete = color => {
        this.props.changeColor(this.props.anySelected, color.hex.replace('#', ''));
    }

    render() {
        return (
            <div className="color-pickers">
                <div
                    onClick={() => this.setState({ customColors: true })}
                    className={'tab ' + (this.state.customColors ? 'selected' : '')}
                >
                    Colour Picker
                </div>

                <div
                    onClick={() => this.setState({ customColors: false })}
                    className={'tab ' + (this.state.customColors ? '' : 'selected')}
                >
                    Bonk 1 Colours
                </div>

                {
                    this.state.customColors ? (
                        <div className="custom-color-picker">
                            <SketchPicker
                                disableAlpha={true}
                                presetColors={[]}
                                width={300}
                                color={this.props.currentColor}
                                onChange={this.handleChange}
                                onChangeComplete={this.handleChangeComplete}
                            />
                        </div>
                    ) : (
                        <div className="color-picker">
                            {
                                // Maps each colour to a component (also passes in if it's selected via 'highlight')
                                colors.map((color, i) =>
                                    <Color color={color} highlight={color === this.props.highlightColor} key={i} />
                                )
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    const anySelected = state.shapes.present.filter(shape => shape.selected).length > 0;

    return {
        anySelected,
        currentColor: anySelected ? state.shapes.present.filter(shape => shape.selected)[0].color : state.baseColor.present.color
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        changePreviewColor: (anySelected, color) => {
            if (anySelected) {
                dispatch({
                    type: 'CHANGE_SELECTED_PREVIEW_COLOR',
                    color
                });
            } else {
                dispatch({
                    type: 'CHANGE_BASE_PREVIEW_COLOR',
                    color
                });
            }
        },
        changeColor: (anySelected, color) => {
            if (anySelected) {
                dispatch({type: 'DISABLE_SELECTED_PREVIEW_COLOR'});
                dispatch({
                    type: 'CHANGE_SELECTED_COLOR',
                    color
                });
            } else {
                dispatch({type: 'DISABLE_BASE_PREVIEW_COLOR'});
                dispatch({
                    type: 'CHANGE_BASE_COLOR',
                    color
                });
            }
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorPicker);