import axios from "axios";
import {
    POST_RESUME_HEADER_FAILURE,
    POST_RESUME_HEADER_REQUEST,
    POST_RESUME_HEADER_SUCCESS
} from './types'
import { fetchResumeHeader } from "./actions";

export const postResumeHeader = (postBody) => {
    return async dispatch => {
        try {
            dispatch(postResumeHeaderRequest())
            const postRes = await axios.post('/api/resume/header', postBody)
            console.log(postRes.data)
            dispatch(postResumeHeaderSuccess(postRes.data)) 
            dispatch(fetchResumeHeader()) //this wil refresh the resume header
        } catch (error) {
            dispatch(postResumeHeaderFailure(error.message))
        }
    }
}

/**
 * Since there is not reducer for this post action, 
 * only the backend data change, no data state is
 * sent back to the client.
 * Also mean I didnt have to create the functions below. 
 */

const postResumeHeaderRequest = () => {
    return {
        type: POST_RESUME_HEADER_REQUEST
    }
}

const postResumeHeaderSuccess = (postRes) => {
    return {
        type: POST_RESUME_HEADER_SUCCESS,
        payload: postRes
    }
}

const postResumeHeaderFailure = (error) => {
    return {
        type: POST_RESUME_HEADER_FAILURE,
        payload: error
    }
}