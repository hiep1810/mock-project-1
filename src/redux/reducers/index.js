import { combineReducers } from 'redux';
import auth from './auth-reducer';
import message from './message-reducer';

export default combineReducers({
  auth,
  message,
});
