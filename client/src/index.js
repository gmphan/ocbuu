import 'materialize-css/dist/css/materialize.min.css'
import React from "react";
import { createRoot } from "react-dom/client"; //React 18
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
// import { thunk } from 'redux-thunk';

import App from "./components/App";
import reducers from "./reducers";


//https://www.youtube.com/watch?v=ZKCYqJu4n3s
const store = configureStore({
        reducer: reducers //taking in state and action
        // The thunk middleware (redux-thunk) was automatically added with @reduxjs/toolkit
        // The Thunk is responsible for dispatch
    });

//createRoot was started and being used in React 18
const container = document.getElementById('root')
const root = createRoot(container);
root.render(
        <React.StrictMode>
			<Provider store={store}><App /></Provider>
                        {/* <App /> */}
        </React.StrictMode>
	);
