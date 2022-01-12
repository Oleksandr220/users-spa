import { combineReducers } from 'redux';
import usersReducer from './usersReducer/reducer';
import authReducer from './authReducer/reducer';

export default combineReducers({
  usersReducer,
  authReducer,
});
