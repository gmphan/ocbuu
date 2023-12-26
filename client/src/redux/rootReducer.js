import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './user/userReducer'
import authUserReducer from './authUser/authUserReducer'
import navActiveReducer from './navActive/navActiveReducer'
import resumeHeaderReducer from './resumeHeader/reducer'

const rootReducer = combineReducers({
    user: userReducer,
    authUser: authUserReducer,
    navActive: navActiveReducer,
    resumeHeader: resumeHeaderReducer
})

export default rootReducer