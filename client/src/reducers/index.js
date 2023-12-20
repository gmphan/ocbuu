import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import navReducer from "./navReducer";

export default combineReducers({
    auth: authReducer,
    navActive : navReducer
})