import React from 'react';
import { connect } from 'react-redux';

class Export extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttons: [
                'save', 'preview', 'export', 'delete'
            ],

            deleting: false,

            tooltip: '',
            showTooltip: false,
            overrideTooltip: null   // Used for displaying tooltips when a button is clicked
        };
    }

    clickButton = button => {
        switch (button) {
            case 'save': {
                this.props.saveSkin(this.props.skinData);

                this.setOverrideTooltip('Saved!');

                setTimeout(() => {
                    this.resetOverrideTooltip('save');
                }, 1000);

                break;
            }

            case 'preview': {
                this.props.showPreview();

                break;
            }

            case 'export': {
                this.props.exportSkin(this.props.skinData);

                break;
            }

            case 'delete': {
                if (this.state.deleting) {
                    this.props.deleteSkin();

                    this.setState({deleting: false});
                    this.setTooltip('delete');
                } else {
                    // Confirmation message
                    this.setState({deleting: true});
                    this.setTooltip('Sure?');
                }

                break;
            }
        }
    }

    // Some helper functions for the tooltips

    setTooltip = button => {
        this.setState({
            tooltip: button,
            showTooltip: true
        });
    }
    resetTooltip = () => {
        this.setState({
            deleting: false,
            showTooltip: false
        });
    }
    
    setOverrideTooltip = tooltip => {
        this.setState({
            overrideTooltip: tooltip
        });
    }
    resetOverrideTooltip = () => {
        this.setState({
            overrideTooltip: null
        });
    }

    render() {
        // Maps the array of button strings to an array of elements
        var buttons = this.state.buttons.map((button, i) =>
            <img
                onClick={() => this.clickButton(button)}
                onMouseEnter={() => this.setTooltip(button)}
                src={require('./' + button + '.svg')}
                alt={button}
                draggable="false"
                key={i}
            />
        );
        var tooltipTop = (this.state.showTooltip ? 0 : -33) + 'px';     // Sets the position of the tooltip to show/hide it
        var tooltipText = this.state.overrideTooltip || this.state.tooltip;

        return (
            <div className="export">
                <div className="icons" onMouseLeave={this.resetTooltip}>
                    {buttons}
                </div>
                <div className="tooltip" style={{top: tooltipTop}}>
                    {tooltipText}
                </div>
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    return {
        skinData: {
            baseColor: state.baseColor.present,
            shapes: state.shapes.present
        }
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        saveSkin: skinData => {
            dispatch({
                type: 'GENERATE_SKIN_CODE',
                skinData,
                save: true
            });
        },
        exportSkin: skinData => {
            dispatch({
                type: 'GENERATE_SKIN_CODE',
                skinData,
                save: true,
                export: true
            });
        },
        deleteSkin: () => {
            dispatch({type: 'DELETE_ALL'});
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Export);
