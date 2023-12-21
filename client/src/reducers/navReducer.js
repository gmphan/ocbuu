import { SET_ACTIVE_LINK } from "../actions/types";

function navReducer(state = '/', action) {
    switch (action.type) {
        case SET_ACTIVE_LINK:
            return action.payload;
        default:
            return state;
    }
}

export default navReducer;

/**
 * return action.payload is the right way
 * vs return {activeLink: action.payload} this will messup a lot of think because 
 * the store will store the wholething in another layer of object. 
 */