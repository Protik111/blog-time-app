import { ActionTypes } from "../action/User.types";

const initialState = {
    users: null,
    loading: false,
    error: {},
}

const userReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ActionTypes.POST_USER:
            return {
                ...state,
                users: payload,
                loading: false
            };
        case ActionTypes.POST_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default userReducer;