import { ActionTypes } from "../action/Post.types";

const initialState = {
    post: null,
    posts: [],
    loading: true,
    error: {},
};

const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CREATE_POST:
        case ActionTypes.GET_ALL_POSTS:
        case ActionTypes.UPDATE_POST:
            return {
                ...state,
                post: payload,
                loading: false
            }
        case ActionTypes.POST_FAIL:
        case ActionTypes.DELETE_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case ActionTypes.ALL_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false,
                error: payload
            }
        case ActionTypes.ADD_LOVE:
        case ActionTypes.REMOVE_LOVE:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post._id === payload.postId ? { ...post, loves: payload.loves } : post
                ),
                loading: false
            }
        default:
            return state;
    }
}

export default postReducer;