import React from 'react';
import ReactDom from 'react-dom'
// Start setup of Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // applyMiddleware will help with Thunk

//import reducers
import reducers from './reducers'


import App from './components/App'

// The first argument to createStore is a reducer the second argument is the initial state of the app
const store = createStore(reducers, {}, applyMiddleware())

ReactDom.render(
    <Provider store={store}><App></App></Provider>,
    document.querySelector("#root")
);