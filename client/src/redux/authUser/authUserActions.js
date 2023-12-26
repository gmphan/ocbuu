import axios from 'axios';
import {
    FETCH_AUTH_USER_REQUEST,
    FETCH_AUTH_USER_SUCCESS,
    FETCH_AUTH_USER_FAILURE
} from './authUserTypes'

export const fetchAuthUser = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchAuthUserRequest)
            const res = await axios.get('/api/current_user')
            dispatch(fetchAuthUserSuccess(res.data))
        } catch (error) {
            dispatch(fetchAuthUserFailure(error.message))
        }
        
    }
}

const fetchAuthUserRequest = () => {
    return {
        type: FETCH_AUTH_USER_REQUEST
    }
}

const fetchAuthUserSuccess = (user) => {
    return {
        type: FETCH_AUTH_USER_SUCCESS,
        payload: user
    }
}

const fetchAuthUserFailure = error => {
    return {
        type: FETCH_AUTH_USER_FAILURE,
        payload: error
    }
}