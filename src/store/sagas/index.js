import { spawn } from 'redux-saga/effects';
import authSagas from './auth';
import testSagas from './test';

export default function* root() {
  yield spawn(authSagas);
  yield spawn(testSagas);
}
