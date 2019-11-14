import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { Routes } from './Routes';

const store = createStore(reducers, {}, applyMiddleware(thunk));

// Regular apps use `.render`, but as this already was rendered by the server
// you use `.hydrate` to optimize/bind all handlers to the already existing stuff
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>
          {renderRoutes(Routes)}
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
