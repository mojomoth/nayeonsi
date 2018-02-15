import { spawn } from 'redux-saga/effects';
import auth from './auth';
import user from './user';
import test from './test';

export default function* root() {
  yield spawn(auth);
  yield spawn(user);
  yield spawn(test);
}
