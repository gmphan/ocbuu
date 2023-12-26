import {
    FETCH_AUTH_USER_REQUEST,
    FETCH_AUTH_USER_SUCCESS,
    FETCH_AUTH_USER_FAILURE
} from './authUserTypes'

const initState = {
    loading: false,
    user: [],
    error: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_AUTH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_AUTH_USER_SUCCESS:
            return {
                loading:false,
                user: action.payload,
                error: ''
            }
        case FETCH_AUTH_USER_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.payload
            }
        default: 
            return state
    }
}

export default reducer