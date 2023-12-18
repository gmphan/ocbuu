import 'materialize-css/dist/css/materialize.min.css'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import { thunk } from 'redux-thunk';

import App from "./components/App";
import reducers from "./reducers";

const store = configureStore({
        reducer: reducers
        // The thunk middleware (redux-thunk) was automatically added with @reduxjs/toolkit
    });

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
)