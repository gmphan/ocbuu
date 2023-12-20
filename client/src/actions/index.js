import axios from 'axios';
import { FETCH_USER } from './types';
import { SET_ACTIVE_LINK } from './types';

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user')
        dispatch({
            type: FETCH_USER,
            payload: res.data
        })
    }

export const setActiveLink = (link) => async dispatch => {
    // handle the click but how to send the action in here????
    // how to get link
    dispatch({
        type: SET_ACTIVE_LINK,
        payload: link
    })
}