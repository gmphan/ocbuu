import 'materialize-css/dist/css/materialize.min.css'
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
                {/* <App /> */}
        </React.StrictMode>
	);
