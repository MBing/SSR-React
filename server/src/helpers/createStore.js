import axios from 'axios';
import { applyMiddleware, createStore as cS } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../client/reducers';

const createStore = req => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: {
      cookie: req.get('cookie') || '',
    },
  });
  const store = cS(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};

export { createStore };
