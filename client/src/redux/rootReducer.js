import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './user/userReducer'
import authUserReducer from './authUser/authUserReducer'
import resume from './resume/reducer'
import resumeHeader from './resumeHeader/reducer'

const rootReducer = combineReducers({
    user: userReducer,
    authUser: authUserReducer,
    resume,
    resumeHeader
})

export default rootReducer