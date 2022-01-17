import axios from 'axios';
import { ActionTypes } from './Auth.types';
import { setAlert } from '../action/Alert.action';

export const registerUser = ({name, email, password}) => async dispatch => {
    const headersConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password});

    try {
        const response = await axios.post('/api/user/register', body, headersConfig);

        dispatch({
            type: ActionTypes.REGISTER_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors, 'errors');
        if(errors){
            errors.map(error => setAlert(error.msg, 'notMatchedP'))
        }
        dispatch({
            type: ActionTypes.REGISTER_FAIL
        })
    }
}