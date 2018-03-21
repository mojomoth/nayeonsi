const DEFAULT_STATE = {
  user: null,
  modifyUser: null,
  target: null,
  state: null,
  isProgress: false,
  point: 0,
  pointLog: {},
  costs: {},
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

    case 'FINISH_USER':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };
    
    case 'GET_MODIFY_USER':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_MODIFY_USER':
      return {
        ...state,
        modifyUser: action.payload,
        state: action.type,
        isProgress: false,
      };

    case 'FINISH_MODIFY_USER':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'GET_POINT':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_POINT':
      return {
        ...state,
        point: action.payload,
        state: action.type,
        isProgress: false,
      };

    case 'SET_POINT_LOG':
      return {
        ...state,
        pointLog: action.payload,
        state: action.type,
        isProgress: false,
      };

    case 'FINISH_POINT':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      }; 

    case 'REQUEST_CHARGE_POINT':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'RESPONSE_CHARGE_POINT':
      return {
        ...state,
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
