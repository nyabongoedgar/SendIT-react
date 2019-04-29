import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import LoginReducer from './LoginReducer';
export default combineReducers({
    registrationReducer,
    LoginReducer,
  });
  