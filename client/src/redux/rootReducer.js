import { combineReducers } from "redux";
import alertReducer from './reducer/Alert.reducer';
import authReducer from "./reducer/Auth.reducer";
import profileReducer from "./reducer/Profile.reducer";
import postReducer from "./reducer/Post.reducer";
import userReducer from './reducer/User.reducer';

export default combineReducers({
    alertReducer,
    authReducer,
    profileReducer,
    postReducer,
    userReducer
})