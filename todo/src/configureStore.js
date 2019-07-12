import { createStore } from 'redux';
import { tasksReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = tasksReducer;

export function configureStore() {
  const store = createStore(reducer, composeWithDevTools());
  return store;
};