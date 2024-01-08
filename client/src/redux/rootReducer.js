import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './user/userReducer'
import authUserReducer from './authUser/authUserReducer'
import resumeHeader from './resumeHeader/reducer'

const rootReducer = combineReducers({
    user: userReducer,
    authUser: authUserReducer,
    resumeHeader
})

export default rootReducer