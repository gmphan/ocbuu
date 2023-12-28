import { SET_ACTIVE_LINK } from "./navActiveTypes";

export const setActiveLink = (link) => {
    return dispatch => {
        try {
            // console.log('link from action', link)
            dispatch({
                type: SET_ACTIVE_LINK,
                payload:link
            })
        } catch (error) {
            
        }
    }
}

