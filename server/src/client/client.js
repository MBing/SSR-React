import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

// Regular apps use `.render`, but as this already was rendered by the server
// you use `.hydrate` to optimize/bind all handlers to the already existing stuff
ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>, document.querySelector('#root'));
