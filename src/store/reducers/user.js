const DEFAULT_STATE = {
  user: null,
  target: null,
  tadays: [],
  history_from: [],
  history_to: [],
  history_appeal: [],
  state: null,
  isProgress: false,
  point: 0,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        state: action.type,
        isProgress: false,
      };

    case 'GET_TARGET_USER':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_TARGET_USER':
      return {
        ...state,
        target: action.payload,
        state: action.type,
        isProgress: false,
      };
    
    case 'GET_USER_BY_LOCATION':
      return {
        ...state,
        state: action.type,
      };

    default:
      return state;
  }
};
