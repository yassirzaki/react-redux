import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

function reducer(state = { count: 0 }, action) {
    switch (action.type) {

        case 'COUNTER_INCREMENT':
            return { ...state, count: state.count + action.payload }

        case 'COUNTER_DECREMENT':
            return { ...state, count: state.count - 1 }

        default:
            return state
    }
}

const store = createStore(reducer, composeWithDevTools());


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));