import { put, takeEvery } from 'redux-saga/effects';
import firebase from 'lib/firebase';

const database = firebase.database();

function* getUser(action) {
  const { uid } = action.payload;

  let snap = yield database.ref('user_links').child(uid).once('value');
  const key = snap.val();

  snap = yield database.ref('users').child(key).once('value');
  const user = snap.val();
  user.key = key;

  yield put({ type: 'SET_USER', payload: user });
}

export default function* userSagas() {
  yield takeEvery('GET_USER', getUser);
}

