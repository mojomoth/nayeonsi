import { combineReducers } from 'redux';
import test from './test';
import auth from './auth';
import user from './user';
import card from './card';
import chat from './chat';

export default combineReducers({
  test,
  auth,
  user,
  card,
  chat,
});
