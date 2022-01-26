import { ActionTypes } from "../action/Post.types";

const initialState = {
    post: null,
    posts: [],
    loading: true,
    error: {}
};

const postReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ActionTypes.CREATE_POST:
        case ActionTypes.GET_ALL_POSTS:
            return {
                ...state,
                post: payload,
                loading: false
            }
        case ActionTypes.POST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default postReducer;