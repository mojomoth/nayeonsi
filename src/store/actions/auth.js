export const loginGoogleUser = () => ({
  type: 'LOGIN_GOOGLE_USER',
});

export const loginFacebookUser = () => ({
  type: 'LOGIN_FACEBOOK_USER',
});

export const loginEmailUser = (email, password) => ({
  type: 'LOGIN_EMAIL_USER',
  payload: {
    email, 
    password,
  },
});

export const createEmailUser = (email, password) => ({
  type: 'CREATE_EMAIL_USER',
  payload: {
    email, 
    password,
  },
});

export const checkAuthStateChanged = callback => ({
  type: 'CHECK_AUTH_STATE_CHANGED',
  payload: callback,
});

// 실제적인 로그인이 일어났을 때 실행되는 action creator
// App.js 내의 auth.onAuthStateChanged 가 실행시켜줌
export const loginUser = user => ({
  type: 'LOGIN_USER',
  payload: user,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

export const changePassword = (password, newPassword) => ({
  type: 'CHANGE_PASSWORD',
  payload: {
    password,
    newPassword,
  },
});

export const initializeAuth = () => ({
  type: 'INITIALIZE_AUTH',
});
