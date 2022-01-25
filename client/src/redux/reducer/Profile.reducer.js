import { ActionTypes } from "../action/Profile.types";
// import { ActionTypes } from '../action/Auth.types';

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}

const profileReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ActionTypes.GET_PROFILE:
        case ActionTypes.ADD_EXPERIENCE:
        case ActionTypes.DELETE_EXPERIENCE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case ActionTypes.PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case 'CLEAR_PROFILE': 
        return {
            ...state,
            profile: null,
            loading: false
        }
        default:
            return state;
    }
}

export default profileReducer;