const DEFAULT_STATE = {
  rooms: [],
  messages: [],
  target: null,
  chatKey: null,
  state: null,
  isProgress: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_MATCHES':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_MATCHES':
      return {
        ...state,
        rooms: action.payload,
        state: action.type,
        isProgress: false,
      };
    
    case 'FINISH_MATCHES':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'GET_CHAT':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_CHAT':
      return {
        ...state,
        chatKey: action.payload.chatKey,
        target: action.payload.target,
        state: action.type,
        isProgress: false,
      };
    
    case 'FINISH_CHAT':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };


    case 'GET_MESSAGES':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_MESSAGES':
      return {
        ...state,
        messages: action.payload,
        state: action.type,
        isProgress: false,
      };
    
    case 'FINISH_MESSAGES':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'REQUEST_OPEN_CHAT':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'RESPONSE_OPEN_CHAT':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    default:
      return state;
  }
};
