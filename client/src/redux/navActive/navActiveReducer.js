import { SET_ACTIVE_LINK } from "./navActiveTypes";

const initState = {
    link : '/',
    error: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ACTIVE_LINK:
            return {
                ...state,
                link: action.payload
            }
        default:
            return state
        
    }
}

export default reducer