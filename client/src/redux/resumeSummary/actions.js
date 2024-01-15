import axios from 'axios'
import {
    FETCH_RESUME_SUMMARY_REQUEST,
    FETCH_RESUME_SUMMARY_SUCCESS,
    FETCH_RESUME_SUMMARY_FAILURE
} from './types'


export function fetchResumeSummary () {
    return async (dispatch) => {
        try {
            dispatch(fetchResumeSummaryRequest())
            const res = await axios.get('/api/resume/summary')
            // const res = {data:[{summary: 'testing summary'}]}
            dispatch(fetchResumeSummarySuccess(res.data))
        } catch (error) {
            dispatch(fetchResumeSummaryFailure(error.message))
        }
    }
}

export function postResumeSummary (postBody) {
    return async (dispatch) => {
        try {
            // console.log(postBody)
            const postRes = await axios.post('/api/resume/summary', postBody)
            // console.log(postRes)
            dispatch(fetchResumeSummary())
        } catch (error) {
            console.log(error.message)
        }
    }
}

function fetchResumeSummaryRequest() {
    return {
        type: FETCH_RESUME_SUMMARY_REQUEST
    }
}

function fetchResumeSummarySuccess(data) {
    return {
        type: FETCH_RESUME_SUMMARY_SUCCESS,
        payload: data
    }
}

function fetchResumeSummaryFailure(error) {
    return {
        type: FETCH_RESUME_SUMMARY_FAILURE,
        payload: error
    }
}

