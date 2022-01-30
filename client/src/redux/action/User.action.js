import axios from 'axios';
import { ActionTypes } from './User.types';

export const loadUserOfPost = (userId) => async dispatch => {
    try {
        const response = await axios.get(`/postby/${userId}`);
        
        dispatch({
            type: ActionTypes.POST_USER,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ActionTypes.POST_USER_FAIL,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}