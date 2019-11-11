import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components/Home';

// Regular apps use `.render`, but as this already was rendered by the server
// you use `.hydrate` to optimize/bind all handlers to the already existing stuff
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
