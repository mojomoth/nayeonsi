import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import firebase from 'lib/firebase';
import { 
  TODAY_CARD, 
  TYPE_CARD,
  LIKE_YOU,
  SECRET_APPEAL,
  LOCATION_APPEAL,
  LOCATION_SECRET_APPEAL,
  LOCATION_LIKE_YOU,
} from 'constants/server';

const database = firebase.database();

function* getCards(action) {
  const { data } = action.payload;
  const cards = [];

  if (data.today !== null && data.today !== undefined) {
    for (const d of Object.keys(data.today)) {
      const snap = yield database.ref('/users').child(d).once('value');
      const user = snap.val();
      user.key = d;
      user.isTop = false;
      user.isSecret = false;
      cards.push(user);
    }
  }
 
  if (data.appeal !== null && data.appeal !== undefined) {
    for (const d of Object.keys(data.appeal)) {
      const snap = yield database.ref('/users').child(d).once('value');
      const user = snap.val();
      user.key = d;
      user.isTop = false;
      user.isSecret = false;
      cards.push(user);
    }
  }
  
  if (data.type !== null && data.type !== undefined) {
    for (const d of Object.keys(data.type)) {
      const snap = yield database.ref('/users').child(d).once('value');
      const user = snap.val();
      user.key = d;
      user.isTop = false;
      user.isSecret = false;
      cards.push(user);
    }
  }

  if (data.secret !== null && data.secret !== undefined) {
    for (const d of Object.keys(data.secret)) {
      const snap = yield database.ref('/users').child(d).once('value');
      const user = snap.val();
      user.key = d;
      user.isTop = false;
      user.isSecret = true;
      cards.push(user);
    }
  }

  yield put({ type: 'SET_CARDS', payload: cards });
}

function* setCards() {
  yield put({ type: 'FINISH_CARDS' });
}

function* getAttractions() {
  const snap = yield database.ref('/attractions').once('value');

  const datas = [];
  for (const data of Object.keys(snap.val())) {
    datas.push(data);
  }

  yield put({ type: 'SET_ATTRACTIONS', payload: datas });
}

function* setAttractions() {
  yield put({ type: 'FINISH_ATTRACTIONS' });
}

function* getHistories(action) {
  const { data } = action.payload;
  const cards = { you: [], me: [] };

  if (data.you !== null && data.you !== undefined) {
    for (const d of Object.keys(data.you)) {
      const snap = yield database.ref('/users').child(d).once('value');
      const user = snap.val();
      user.key = d;
      user.isTop = false;
      user.isSecret = false;
      user.isRemove = false;
      cards.you.push(user);
    }
  }
 
  if (data.me !== null && data.me !== undefined) {
    for (const d of Object.keys(data.me)) {
      const snap = yield database.ref('/users').child(d).once('value');
      const user = snap.val();
      user.key = d;
      user.isTop = false;
      user.isSecret = false;
      user.isRemove = false;
      cards.me.push(user);
    }
  }

  yield put({ type: 'SET_HISTORIES', payload: cards });
}

function* setHistories() {
  yield put({ type: 'FINISH_HISTORIES' });
}

function* removeHistory(action) {
  const { key, category, cardKey } = action.payload;
  yield database.ref('/likes').child(key).child(category).child(cardKey).remove();
  yield put({ type: 'FINISH_HISTORIES' });
}

function* requestTodayCard(action) {
  const { key, targetGender } = action.payload;
  const response = axios.get(`${TODAY_CARD}?key=${key}&gender=${targetGender}`);
  yield put({ type: 'RESPONSE_TODAY_CARD', payload: response.data });
}

function* requestTypeCard(action) {
  const { key, type, targetGender } = action.payload;
  const response = axios.get(`${TYPE_CARD}?key=${key}&type=${type}&gender=${targetGender}`);
  yield put({ type: 'RESPONSE_TYPE_CARD', payload: response.data });
}

function* requestLikeYou(action) {
  const { key, you } = action.payload;
  const response = axios.get(`${LIKE_YOU}?key=${key}&you=${you}`);
  yield put({ type: 'RESPONSE_LIKE_YOU', payload: response.data });
}

function* requestSecretAppeal(action) {
  const { key, you } = action.payload;
  const response = axios.get(`${SECRET_APPEAL}?key=${key}&you=${you}`);
  yield put({ type: 'RESPONSE_SECRET_APPEAL', payload: response.data });
}

function* requestLocationAppeal(action) {
  const { 
    key, location, targetGender, count, 
  } = action.payload;
  const response = axios.get(`${LOCATION_APPEAL}?key=${key}&count=${count}&location=${location}&gender=${targetGender}`);
  yield put({ type: 'RESPONSE_LOCATION_APPEAL', payload: response.data });
}

function* requestLocationSecretAppeal(action) {
  const { 
    key, location, targetGender, count, 
  } = action.payload;
  const response = axios.get(`${LOCATION_SECRET_APPEAL}?key=${key}&count=${count}&location=${location}&gender=${targetGender}`);
  yield put({ type: 'RESPONSE_LOCATION_SECRET_APPEAL', payload: response.data });
}

function* requestLocationLikeYou(action) {
  const { 
    key, location, targetGender, count, 
  } = action.payload;
  const response = axios.get(`${LOCATION_LIKE_YOU}?key=${key}&count=${count}&location=${location}&gender=${targetGender}`);
  yield put({ type: 'RESPONSE_LOCATION_LIKE_YOU', payload: response.data });
}

export default function* cardSagas() {
  yield takeEvery('GET_CARDS', getCards);
  yield takeEvery('SET_CARDS', setCards);
  yield takeEvery('GET_ATTRACTIONS', getAttractions);
  yield takeEvery('SET_ATTRACTIONS', setAttractions);
  yield takeEvery('GET_HISTORIES', getHistories);
  yield takeEvery('SET_HISTORIES', setHistories);
  yield takeEvery('REQUEST_TODAY_CARD', requestTodayCard);
  yield takeEvery('REQUEST_TYPE_CARD', requestTypeCard);
  yield takeEvery('REQUEST_LIKE_YOU', requestLikeYou);
  yield takeEvery('REQUEST_SECRET_APPEAL', requestSecretAppeal);
  yield takeEvery('REQUEST_LOCATION_APPEAL', requestLocationAppeal);
  yield takeEvery('REQUEST_LOCATION_SECRET_APPEAL', requestLocationSecretAppeal);
  yield takeEvery('REQUEST_LOCATION_LIKE_YOU', requestLocationLikeYou);
  yield takeEvery('REMOVE_HISTORY', removeHistory);
}

