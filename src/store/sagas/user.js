import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import firebase from 'lib/firebase';
import { CHARGE_POINT } from 'constants/server';

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

function* getPoint(action) {
  const { data } = action.payload;

  if (data === null) {
    data.point = 0;
    data.log = {};
  }
  
  yield put({ type: 'SET_POINT_LOG', payload: data.log });
  yield put({ type: 'SET_POINT', payload: data.point });
}

function* setPoint() {
  yield put({ type: 'FINISH_POINT' });
}

function* getCosts(action) {
  const { data } = action.payload;
  
  yield put({ type: 'SET_COST', payload: data });
}

function* setCosts() {
  yield put({ type: 'FINISH_COST' });
}

function* requestChargePoint(data) {
  const { key, point, action } = data.payload;
  const response = axios.get(`${CHARGE_POINT}?key=${key}&point=${point}&action=${action}`);
  yield put({ type: 'RESPONSE_LIKE_YOU', payload: response.data });
}

export default function* userSagas() {
  yield takeEvery('GET_USER', getUser);
  yield takeEvery('SET_USER', setUser);
  yield takeEvery('GET_POINT', getPoint);
  yield takeEvery('SET_POINT', setPoint);
  yield takeEvery('GET_COSTS', getCosts);
  yield takeEvery('SET_COSTS', setCosts);
  yield takeEvery('REQUEST_CHARGE_POINT', requestChargePoint);
}

