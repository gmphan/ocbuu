// import axios from 'axios'
import {
    FETCH_RESUME_HEADER_REQUEST,
    FETCH_RESUME_HEADER_SUCCESS,
    FETCH_RESUME_HEADER_FAILURE
} from './types'

export const fetchResumeHeader = () => {
    return async (dispatch) => {
        //request the data from mongodb - need to create a collection in mongodb
        //when success return result
        //when failure return error
        
        try {
            dispatch(fetchResumeHeaderRequest())
            //const res = await axios.get ...
            const res = { data: 'testing '}
            dispatch(fetchResumeHeaderSuccess(res.data))
        } catch (error) {
            dispatch(fetchResumeHeaderFailure(error.message))
        }
    }
}

const fetchResumeHeaderRequest = () => {
    return {
        type: FETCH_RESUME_HEADER_REQUEST
    }
}

const fetchResumeHeaderSuccess = (data) => {
    return {
        type: FETCH_RESUME_HEADER_SUCCESS,
        payload: data
    }
}

const fetchResumeHeaderFailure = (error) => {
    return {
        type: FETCH_RESUME_HEADER_FAILURE,
        payload: error
    }
}