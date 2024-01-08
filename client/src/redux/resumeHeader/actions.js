import axios from 'axios'
import {
    FETCH_RESUME_HEADER_REQUEST,
    FETCH_RESUME_HEADER_SUCCESS,
    FETCH_RESUME_HEADER_FAILURE
} from './types'

export const fetchResumeHeader = () => {
    return async (dispatch) => {        
        try {
            dispatch(fetchResumeHeaderRequest())
            const res = await axios.get('/api/resume/header')
            dispatch(fetchResumeHeaderSuccess(res.data))
        } catch (error) {
            dispatch(fetchResumeHeaderFailure(error.message))
        }
    }
}

export const postResumeHeader = (postBody) => {
    return async dispatch => {
        try {
            const postRes = await axios.post('/api/resume/header', postBody)
            console.log(postRes.data)
            dispatch(fetchResumeHeader()) //this will refresh the resume header
        } catch (error) {
            console.log(error.message)
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

// export const postResumeHeader = (resumeHeaderData) => {
//     // resumeHeaderData = {
//     //     firstName: "Michael",
//     //     lastName: "Phan",
//     //     headLine: "Full Stack Developer with a Passion for Building User-Friendly Applications",
//     //     phoneNum: "678 000 0000", //should be optional
//     //     email: "gmphan7@gmail.com",
//     //     Country: "United States",
//     //     streetAddress: "2192 Murry Trail optional",
//     //     cityState: "Morrow, GA",
//     //     postalCode: "30260",
//     //     relocation: "no", //optional
//     //     employmentEligibility: "Authorized to work in the US for any employer",
//     //     createdDate: new Date(),
//     //     updatedDate: new Date()
//     // }
//     return async dispatch => {
//         try {
//             const result = await axios.post('/api/resume/header', resumeHeaderData
//             )
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
    
// }

