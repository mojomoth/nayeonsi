import { put, takeEvery } from 'redux-saga/effects';
import firebase from 'lib/firebase';

const database = firebase.database();

function* getCosts(action) {
  const { data } = action.payload;
  
  yield put({ type: 'SET_COST', payload: data });
}

function* setCosts() {
  yield put({ type: 'FINISH_COST' });
}

function* getNotice(action) {
  const { data } = action.payload;
  const notice = [];

  for (const key of Object.keys(data)) {
    const snap = yield database.ref('/notice').child(key).once('value');
    notice.push(snap.val());
  }
  
  yield put({ type: 'SET_NOTICE', payload: notice });
}

function* setNotice() {
  yield put({ type: 'FINISH_NOTICE' });
}

function* getEvent(action) {
  const { data } = action.payload;
  const event = [];

  for (const key of Object.keys(data)) {
    const snap = yield database.ref('/event').child(key).once('value');
    event.push(snap.val());
  }
  
  yield put({ type: 'SET_EVENT', payload: event });
}

function* setEvent() {
  yield put({ type: 'FINISH_EVENT' });
}

export default function* userSagas() {
  yield takeEvery('GET_COSTS', getCosts);
  yield takeEvery('SET_COSTS', setCosts);
  yield takeEvery('GET_NOTICE', getNotice);
  yield takeEvery('SET_NOTICE', setNotice);
  yield takeEvery('GET_EVENT', getEvent);
  yield takeEvery('SET_EVENT', setEvent);
}
