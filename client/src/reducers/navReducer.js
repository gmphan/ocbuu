import { SET_ACTIVE_LINK } from "../actions/types";

function navReducer(state = '/', action) {
    switch (action.type) {
        case SET_ACTIVE_LINK:
            console.log('state in navReducer', state);
            return {activeLink: action.payload};
        default:
            console.log('state in navReducer at default', state);
            return {activeLink: state};
    }
}

export default navReducer;