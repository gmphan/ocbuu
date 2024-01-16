import axios from 'axios'
import {
    FETCH_RESUME_EXPERIENCE_FAILURE,
    FETCH_RESUME_EXPERIENCE_REQUEST,
    FETCH_RESUME_EXPERIENCE_SUCCESS
} from './types'

export const fetchResumeExperience = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchResumeExperienceRequest())
            const fetchRes = await axios.get('/api/resume/experience')
            console.log(fetchRes.data)
            dispatch(fetchResumeExperienceSuccess(fetchRes.data))
        } catch (error) {
            dispatch(fetchResumeExperienceFailure(error.message))
        }
    }
}

function fetchResumeExperienceRequest() {
    return {
        type: FETCH_RESUME_EXPERIENCE_REQUEST
    }
}

function fetchResumeExperienceSuccess(data) {
    return {
        type: FETCH_RESUME_EXPERIENCE_SUCCESS,
        payload: data
    }
}

function fetchResumeExperienceFailure(error) {
    return {
        type: FETCH_RESUME_EXPERIENCE_FAILURE,
        payload: error
    }
}