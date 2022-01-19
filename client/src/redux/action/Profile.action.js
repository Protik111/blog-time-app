import axios from 'axios';
import { ActionTypes } from "./Profile.types";

export const getOwnProfile = () => async dispatch => {
    try {
        const response = await axios.get('/api/user/own');

        dispatch({
            type: ActionTypes.GET_PROFILE,
            payload: response.data
        });

    } catch (error) {
        dispatch({
            type: ActionTypes.PROFILE_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        });
    }
};