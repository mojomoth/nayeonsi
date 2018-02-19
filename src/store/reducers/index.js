import { combineReducers } from 'redux';
import test from './test';
import auth from './auth';
import user from './user';
// import card from './card';

export default combineReducers({
  test,
  auth,
  user,
  // card,
});
