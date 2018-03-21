const DEFAULT_STATE = {
  state: null,
  isProgress: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_COST':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_COST':
      return {
        ...state,
        costs: action.payload,
        state: action.type,
        isProgress: false,
      };

    case 'FINISH_COST':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    default:
      return state;
  }
};
