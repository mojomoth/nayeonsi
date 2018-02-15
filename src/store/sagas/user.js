import { put, takeEvery } from 'redux-saga/effects';
import firebase from 'lib/firebase';

const database = firebase.database();

function* getUser(action) {
  const { uid } = action.payload;
  const snap = yield database.ref('users').child(uid).once('value');
  const user = snap.val();

  yield put({ type: 'SET_USER', payload: user });
}

export default function* userSagas() {
  yield takeEvery('GET_USER', getUser);
}

