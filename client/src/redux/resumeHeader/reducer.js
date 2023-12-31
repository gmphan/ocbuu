import {
    FETCH_RESUME_HEADER_FAILURE,
    FETCH_RESUME_HEADER_SUCCESS,
    FETCH_RESUME_HEADER_REQUEST
} from './types'

const initState = {
    loading: false,
    data: [],
    error: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_RESUME_HEADER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_RESUME_HEADER_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_RESUME_HEADER_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default: 
            return state
    }
}

export default reducer