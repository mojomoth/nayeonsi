import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import firebase from 'lib/firebase';
import { TODAY_CARD } from 'constants/server';

const database = firebase.database();


function* getCard(action) {
  
}

function* getTodayCard(action) {
  const { key, targetGender } = action.payload;
console.log(`${TODAY_CARD}?key=${key}&gender=${targetGender}`);
  const response = axios.get(`${TODAY_CARD}?key=${key}&gender=${targetGender}`);

  console.log(response);
  yield put({ type: 'SET_TODAY_CARD', payload: null });

}

export default function* cardSagas() {
  yield takeEvery('GET_CARDS', getCard);
  yield takeEvery('GET_TODAY_CARD', getTodayCard);
}

