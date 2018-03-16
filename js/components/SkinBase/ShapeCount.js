import React from 'react';
import { connect } from 'react-redux';

var ShapeCount = ({ count }) => (
    <h1 style={{
        fontSize: '30px',
        padding: '10px'
    }}>Shape Count: {count}</h1>
);

var mapStateToProps = (state, props) => {
    return {
        count: state.shapes.present.length
    };
}

export default connect(mapStateToProps)(ShapeCount);
