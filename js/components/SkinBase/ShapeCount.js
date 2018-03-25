import React from 'react';
import { connect } from 'react-redux';

var ShapeCount = ({ count }) => (
    <h1 className="shape-count" style={{
        color: count > 16 ? 'red' : '#fff'
    }}>Shape Count: {count}</h1>
);

var mapStateToProps = (state, props) => {
    return {
        count: state.shapes.present.length
    };
}

export default connect(mapStateToProps)(ShapeCount);
