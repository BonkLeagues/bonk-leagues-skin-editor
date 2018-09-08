import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// SCSS
import '../css/index.scss';

// Reducers
import allReducers from './reducers/allReducers';

// Actions
import loadShapes from './actions/loadShapes';
import loadSkinCode from './actions/loadSkinCode';

// Components
import App from './components/App';

// Use Redux dev tools (if it's there)
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store (add all the reducers and middleware)
var store = createStore(
    allReducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

// Dispatch the loadShapes action, and then the loadSkinCode action
store.dispatch(loadShapes).then(() => {
    if (window.location.href.indexOf('?') > -1 || localStorage.getItem('skinCode')) {
        store.dispatch(loadSkinCode);
    }
});

// And finally, render the view!
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
