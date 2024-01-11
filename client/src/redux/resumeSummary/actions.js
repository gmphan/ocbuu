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

