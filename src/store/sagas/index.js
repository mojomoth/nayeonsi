import { spawn } from 'redux-saga/effects';
import app from './app';
import auth from './auth';
import user from './user';
import card from './card';
import chat from './chat';
import test from './test';

export default function* root() {
  yield spawn(app);
  yield spawn(auth);
  yield spawn(user);
  yield spawn(card);
  yield spawn(chat);
  yield spawn(test);
}
