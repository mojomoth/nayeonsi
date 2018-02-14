import { call, spawn, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/test';

function* testSaga() {
  const data = 'test complete';
  yield put(actions.fetchTestFulfilled(data));
}

function* fetchBoardsSaga() {
  try {
    // const { data } = yield call([axios, 'get'], '/boards');
    // const { data } = yield axios.get('/boards');
    const data = 'test';
    yield put(actions.fetchBoardsFulfilled(data));
  } catch (error) {
    yield put(actions.fetchBoardsRejected(error));
  }
}

export default function* watchBoard() {
  yield takeEvery(actions.FETCH_TEST, testSaga);
  yield takeEvery(actions.FETCH_BOARDS, fetchBoardsSaga);
}
