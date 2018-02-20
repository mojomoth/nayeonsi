import { put, takeEvery } from 'redux-saga/effects';
import firebase from 'lib/firebase';

const database = firebase.database();

function* getUser(action) {
  const { uid } = action.payload;

  let snap = yield database.ref('user_links').child(uid).once('value');
  const key = snap.val();
  
  let user = null;
  if (key !== null && key !== undefined) {
    snap = yield database.ref('users').child(key).once('value');
    user = snap.val();
    user.key = key;
  } 
  
  yield put({ type: 'SET_USER', payload: user });
}

function* setUser() {
  yield put({ type: 'FINISH_USER' });
}

export default function* userSagas() {
  yield takeEvery('GET_USER', getUser);
  yield takeEvery('SET_USER', setUser);
}

