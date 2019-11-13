import { applyMiddleware, createStore as cS } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../client/reducers';

const createStore = () => {
  const store = cS(reducers, {}, applyMiddleware(thunk));

  return store;
};

export { createStore };
