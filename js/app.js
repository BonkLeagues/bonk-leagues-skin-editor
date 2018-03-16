import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import allReducers from './reducers/allReducers';

// Actions
import loadShapes from './actions/loadShapes';
import loadSkinCode from './actions/loadSkinCode';

// Components
import App from './components/App';

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(
    allReducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

store.dispatch(loadShapes).then(()=>{
    if (window.location.href.indexOf('?')>-1) store.dispatch(loadSkinCode);
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
