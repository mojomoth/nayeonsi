import { put, takeEvery } from 'redux-saga/effects';
import firebase from 'lib/firebase';

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

function* loginWithProvider(provider) {
  try {
    const user = yield auth.signInWithPopup(provider);
    // 용석: Firebase Auth의 onAuthStateChanged method로 로그인 변경 상태 관리하는 것으로 변경
    yield put({ type: 'LOGIN_USER_REQUEST', payload: user });
  } catch (e) {
    // 로그인 에러가 발생한 경우에만 핸들링
    if (e.code === 'auth/account-exists-with-different-credential') {
      let email = e.email;
      console.log(email + "\n이메일로 이미 가입되어 있습니다.");
      yield put({ type: 'LOGIN_USER_FAILED', payload: e.message });
    } else if (e.code === 'auth/popup-blocked') {
      // 팝업이 차단 된 경우 리다이렉트
      auth.signInWithRedirect(provider);
    } else {
      yield put({ type: 'LOGIN_USER_FAILED', payload: e.message });
    }
  }
}

function* loginWithEmailProvider(action) {
  const { email } = action.payload;
  const { password } = action.payload;

  try {
    yield auth.signInWithEmailAndPassword(email, password);
    yield put({ type: 'LOGIN_USER', payload: auth.currentUser });
    console.log(auth.currentUser);
  } catch (e) {
    yield put({ type: 'LOGIN_USER_FAILED', payload: e.message });
    console.log(e.message);
  }
}

function* createWithEmailProvider(action) {
  const { email } = action.payload;
  const { password } = action.payload;

  try {
    yield auth.createUserWithEmailAndPassword(email, password);
    yield put({ type: 'CREATED_EMAIL_USER', payload: auth.currentUser });
  } catch (e) {
    yield put({ type: 'CREATE_EMAIL_USER_FAILED', payload: e.message });
  }
}

function checkAuthStateChanged(action) {
  auth.onAuthStateChanged(action.payload);
}

function logoutUser() {
  return auth.signOut();
}

export default function* authSagas() {
  yield takeEvery('LOGIN_GOOGLE_USER', () => loginWithProvider(googleProvider));
  yield takeEvery('LOGIN_FACEBOOK_USER', () => loginWithProvider(facebookProvider));
  yield takeEvery('LOGIN_EMAIL_USER', loginWithEmailProvider);
  yield takeEvery('CREATE_EMAIL_USER', createWithEmailProvider);
  yield takeEvery('CHECK_AUTH_STATE_CHANGED', checkAuthStateChanged);
  yield takeEvery('LOGOUT_USER', logoutUser);
}
