import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import LoginReducer from './LoginReducer';
import parcelReducer from './parcelReducer';

export default combineReducers({
    registrationReducer,
    LoginReducer,
    parcelReducer
  });
  