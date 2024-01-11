import {
    FETCH_RESUME_SUMMARY_REQUEST,
    FETCH_RESUME_SUMMARY_SUCCESS,
    FETCH_RESUME_SUMMARY_FAILURE
} from './types'

const initState = {
    loading: false,
    data: [],
    error: ''
}

function reducer(state = initState, action) {
    switch(action.type) {
        case FETCH_RESUME_SUMMARY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_RESUME_SUMMARY_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_RESUME_SUMMARY_FAILURE:
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