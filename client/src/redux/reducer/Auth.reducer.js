import { ActionTypes } from '../action/Auth.types';

const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: false,
    loading: true
}

const authReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case ActionTypes.REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}

export default authReducer;