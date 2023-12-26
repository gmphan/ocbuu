import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer'

//https://www.youtube.com/watch?v=ZKCYqJu4n3s
const store = configureStore({
        reducer: rootReducer //taking in state and action
        // The thunk middleware (redux-thunk) was automatically added with @reduxjs/toolkit
        // The Thunk is giving us option to return a function instead of a object. 
        // we would use that function to dispatch different functions, and each function
        // can return different set of object 
    });

export default store