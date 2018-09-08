import React from 'react';
import { connect } from 'react-redux';

var ShapeCount = ({ count }) => (
    <h1 className="shape-count" style={{color: count > 16 ? 'red' : '#fb016e'}}>
        Shape Count: {count} {count > 16 ? '(OVER MAXIMUM SKIN LAYERS!)' : ''}
    </h1>
);

var mapStateToProps = (state, props) => {
    return {
        count: state.shapes.present.length
    };
}

export default connect(mapStateToProps)(ShapeCount);
