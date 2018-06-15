import React from 'react';
import { connect } from 'react-redux';

class Export extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttons: [
                'save', 'export', 'delete'
            ],

            deleting: false,

            tooltip: '',
            overrideTooltip: null
        };
    }

    clickButton = button => {
        switch (button) {
            case 'save': {
                this.props.saveSkin(this.props.shapeObj);

                this.setOverrideTooltip('Saved!');

                setTimeout(() => {
                    this.resetOverrideTooltip('save');
                }, 1000);

                break;
            }

            case 'export': {
                this.props.exportSkin(this.props.shapeObj);

                break;
            }

            case 'delete': {
                if (this.state.deleting) {
                    this.props.deleteSkin();

                    this.setState({
                        deleting: false
                    });
                    this.setTooltip('delete');
                } else {
                    this.setState({
                        deleting: true
                    });
                    this.setTooltip('Sure?');
                }

                break;
            }
        }
    }

    setTooltip = button => {
        this.setState({
            tooltip: button
        });
    }
    resetTooltip = () => {
        this.setState({
            deleting: false,
            tooltip: ''
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
        return (
            <div className="export">
                <div className="icons">
                    {this.state.buttons.map((button, i) =>
                        <img
                            onClick={()=>this.clickButton(button)}
                            onMouseEnter={()=>this.setTooltip(button)}
                            onMouseLeave={this.resetTooltip} src={require('./'+button+'.svg')}
                            alt={button}
                            draggable="false"
                            key={i}
                        />
                    )}
                </div>
                <div className="tooltip">{this.state.overrideTooltip || this.state.tooltip}</div>
            </div>
        );
    }
}

var mapStateToProps = (state, props) => {
    return {
        shapeObj: {
            baseColor: state.baseColor.present,
            shapes: state.shapes.present
        }
    };
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        saveSkin: shapeObj => {
            dispatch({
                type: 'GENERATE_SKIN_CODE',
                obj: shapeObj,
                save: true
            });
        },
        exportSkin: shapeObj => {
            dispatch({
                type: 'GENERATE_SKIN_CODE',
                obj: shapeObj,
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
