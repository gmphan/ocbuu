import axios from 'axios'
import {
    FETCH_RESUME_REQUEST,
    FETCH_RESUME_SUCCESS,
    FETCH_RESUME_FAILURE
} from './types'

export const fetchResume = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchResumeRequest())
            const result = await axios.get('/api/resume')
            dispatch(fetchResumeSuccess(result.data))
        } catch (error) {
            dispatch(fetchResumeFailure(error.message))
        }
    }
}

export const postResumeHeader = (resumeDataHeader) => {
    console.log(resumeDataHeader)
    return async (dispatch) => {
        try {
            console.log(resumeDataHeader)
            // const result = await axios.post('/api/resume/header', resumeDataHeader)
        } catch (error) {
            
        }
    }
}

const fetchResumeRequest = () => {
    return {
        type: FETCH_RESUME_REQUEST
    }
}

const fetchResumeSuccess = (data) => {
    return {
        type: FETCH_RESUME_SUCCESS,
        payload: data
    }
}

const fetchResumeFailure = (error) => {
    return {
        type: FETCH_RESUME_FAILURE,
        payload: error
    }
}