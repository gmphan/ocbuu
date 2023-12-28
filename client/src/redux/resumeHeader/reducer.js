import {
    FETCH_RESUME_HEADER_FAILURE,
    FETCH_RESUME_HEADER_SUCCESS,
    FETCH_RESUME_HEADER_REQUEST
} from './types'

const initState = {
    loading: false,
    data: [],
    // data: [{
    //     id: '1',
    //     firstName: "Giang",
    //     lastName: "Phan",
    //     headLine: "Full Stack Developer with a Passion for Building User-Friendly Applications",
    //     phoneNum: "678 000 0000", //should be optional
    //     email: "gmphan7@gmail.com",
    
    //     Country: "United States",
    //     streetAddress: "2192 Murry Trail optional",
    //     cityState: "Morrow, GA",
    //     postalCode: "30260",
    //     relocation: "no", //optional
    
    //     employmentEligibility: "Authorized to work in the US for any employer"
    
    // }],
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