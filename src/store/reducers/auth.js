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
    case 'INITIALIZE_AUTH':
      return {
        ...state,
        uid: null,
        isProgress: false,
        isError: false,
        error: '',
        state: '',
      };

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

    case 'CHANGE_PASSWORD':
      return {
        ...state,
        isProgress: true,
        isError: false,
        state: type,
      };

    case 'CHANGE_PASSWORD_FAILED':
      return {
        ...state,
        isProgress: false,
        isError: true,
        error: payload,
        state: type,
      };

    case 'CHANGE_PASSWORD_COMPLETE':
      return {
        ...state,
        isProgress: false,
        isError: false,
        state: type,
      };

    case 'WITHDRAW':
      return {
        ...state,
        isProgress: true,
        isError: false,
        state: type,
      };

    case 'WITHDRAW_FAILED':
      return {
        ...state,
        isProgress: false,
        isError: true,
        error: payload,
        state: type,
      };

    case 'WITHDRAW_COMPLETE':
      return {
        ...state,
        isProgress: false,
        isError: false,
        state: type,
      };

    default:
      return state;
  }
};
