import axios from 'axios';
import { setAlert } from './Alert.action';
import { ActionTypes } from "./Post.types"

export const createPost = (formData, navigate) => async dispatch => {
    try {
        const headersConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify(formData);

        const response = await axios.post('/api/user/createpost', body, headersConfig);

        dispatch({
            type: ActionTypes.CREATE_POST,
            payload: response.data
        });
        dispatch(setAlert('Post Create Successfully', 'Pcreated'));
        navigate('/dashboard')

    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.map(error => dispatch(setAlert(error.msg, 'notcreated')))
        }

        dispatch({
            type: ActionTypes.POST_FAIL,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

//get all post
export const getAllPosts = () => async dispatch => {
    try {
        const response = await axios.get('/api/user/showallpost');

        dispatch({
            type: ActionTypes.GET_ALL_POSTS,
            payload: response.data
        });
        
    } catch (error) {
        dispatch({
            type: ActionTypes.POST_FAIL,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}