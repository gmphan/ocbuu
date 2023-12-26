import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './user/userReducer'
import authUserReducer from './authUser/authUserReducer'
import navActiveReducer from './navActive/navActiveReducer'

const rootReducer = combineReducers({
    user: userReducer,
    authUser: authUserReducer,
    navActive: navActiveReducer
})

export default rootReducer