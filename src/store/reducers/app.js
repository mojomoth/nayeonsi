const DEFAULT_STATE = {
  state: null,
  isProgress: false,
  costs: [],
  notice: [],
  event: [],
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

    case 'GET_NOTICE':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_NOTICE':
    console.log(action.payload);
      return {
        ...state,
        notice: action.payload,
        state: action.type,
        isProgress: false,
      };

    case 'FINISH_NOTICE':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };
      
    case 'GET_EVENT':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_EVENT':
      return {
        ...state,
        event: action.payload,
        state: action.type,
        isProgress: false,
      };

    case 'FINISH_EVENT':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    default:
      return state;
  }
};
