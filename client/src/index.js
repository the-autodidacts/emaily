// import css 
import 'materialize-css/dist/css/materialize.min.css';

// React 
import React from 'react';
import ReactDom from 'react-dom';

// Start setup of Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // applyMiddleware will help with Thunk


//import reducers
import reducers from './reducers';

// import our top level component
import App from './components/App'

// The first argument to createStore is a reducer the second argument is the initial state of the app
const store = createStore(reducers, {}, applyMiddleware())

// Starts the rendering process takes an App component since we are using Redux 
// We must wrap that component in a provider second argument is the root of document 
// where everything will be rendered. 
ReactDom.render(
    <Provider store={store}> <App /> </Provider>,
    document.querySelector("#root")
);