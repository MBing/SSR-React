import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const createStore = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
};

export { createStore };
