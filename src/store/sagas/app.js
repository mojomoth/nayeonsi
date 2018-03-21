import { put, takeEvery } from 'redux-saga/effects';

function* getCosts(action) {
  const { data } = action.payload;
  
  yield put({ type: 'SET_COST', payload: data });
}

function* setCosts() {
  yield put({ type: 'FINISH_COST' });
}

export default function* userSagas() {
  yield takeEvery('GET_COSTS', getCosts);
  yield takeEvery('SET_COSTS', setCosts);
}
