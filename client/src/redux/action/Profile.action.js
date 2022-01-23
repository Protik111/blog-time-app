import axios from 'axios';
import { ActionTypes } from "./Profile.types";
import { setAlert } from './Alert.action';

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

//create profile or update
export const createProfile = (formData, navigate) => async dispatch => {
    console.log('formdata from action', formData);
    console.log('create function called');
    try {
        const headersConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        // const body = JSON.stringify(formData);
        // console.log('body', body);
        const response = await axios.post('/api/user/create', formData, headersConfig);
        console.log(response, 'response');

        dispatch({
            type: ActionTypes.GET_PROFILE,
            payload: response.data
        });

        dispatch(setAlert("Profile Created", 'Pcreated'));

        navigate('/dashboard');


    } catch (error) {
        const errors = error.response.data.errors;
        // console.log(errors, 'errors');
        if (errors) {
            errors.map(error => dispatch(setAlert(error.msg, 'notcreated')))
        }

        dispatch({
            type: ActionTypes.PROFILE_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        });
    }
}