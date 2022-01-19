import { combineReducers } from "redux";
import alertReducer from './reducer/Alert.reducer';
import authReducer from "./reducer/Auth.reducer";
import profileReducer from "./reducer/Profile.reducer";

export default combineReducers({
    alertReducer,
    authReducer,
    profileReducer
})