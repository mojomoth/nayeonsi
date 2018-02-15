const DEFAULT_STATE = {
  uid: null,
  name: '',
  email: '',
  isProgress: false,
  isError: false,
  error: '',
  state: null,
};

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case 'LOGIN_EMAIL_USER':
      return {
        ...state,
        uid: null,
        isProgress: true,
        isError: false,
        error: '',
        state: type,
      };

    case 'LOGIN_USER_FAILED':
      return {
        ...state,
        uid: null,
        isProgress: false,
        isError: true,
        error: payload,
        state: type,
      };

    case 'LOGIN_USER':
      return {
        ...state,
        uid: payload.uid,
        name: payload.displayName,
        email: payload.email,
        isProgress: false,
        isError: false,
        error: '',
        state: type,
      };

    case 'CREATE_EMAIL_USER':
      return {
        ...state,
        uid: null,
        isProgress: true,
        isError: false,
        error: '',
        state: type,
      };
    
    case 'CREATE_EMAIL_USER_FAILED':
      return {
        ...state,
        uid: null,
        isProgress: false,
        isError: true,
        error: payload,
        state: type,
      };

    case 'CREATED_EMAIL_USER':
      return {
        ...state,
        uid: payload.uid,
        name: payload.displayName,
        email: payload.email,
        isProgress: false,
        isError: false,
        error: '',
        state: type,
      };

    case 'LOGOUT_USER':
      return {
        ...state,
        uid: null,
        isProgress: false,
        isError: false,
        error: '',
        state: type,
      };

    default:
      return state;
  }
};
