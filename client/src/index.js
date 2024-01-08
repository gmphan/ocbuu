import 'bootstrap/dist/css/bootstrap.min.css' //this is very important for manything to work
import React from "react";
import { createRoot } from "react-dom/client"; //React 18
import { Provider } from "react-redux";
import App from "./components/app";
import store from './redux/store'



//createRoot was started and being used in React 18
const container = document.getElementById('root')
const root = createRoot(container);
root.render(
        <React.StrictMode>
                <Provider store={store}><App /></Provider>
        </React.StrictMode>
	);
