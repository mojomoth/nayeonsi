import { combineReducers } from 'redux';
import test from './test';
import app from './app';
import auth from './auth';
import user from './user';
import card from './card';
import chat from './chat';

export default combineReducers({
  test,
  app,
  auth,
  user,
  card,
  chat,
});
