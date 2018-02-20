const DEFAULT_STATE = {
  cards: [],
  attractions: [],
  likeYou: [],
  likeMe: [],
  state: null,
  isProgress: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_CARDS':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_CARDS':
      return {
        ...state,
        cards: action.payload,
        state: action.type,
        isProgress: false,
      };
    
    case 'FINISH_CARDS':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'GET_ATTRACTIONS':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_ATTRACTIONS':
      return {
        ...state,
        attractions: action.payload,
        state: action.type,
        isProgress: false,
      };

    case 'GET_HISTORIES':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_HISTORIES':
      return {
        ...state,
        likeYou: action.payload.you,
        likeMe: action.payload.me,
        state: action.type,
        isProgress: false,
      };
    
    case 'FINISH_HISTORIES':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'FINISH_ATTRACTIONS':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'REQUEST_TODAY_CARD':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'RESPONSE_TODAY_CARD':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'REQUEST_TYPE_CARD':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'RESPONSE_TYPE_CARD':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'REQUEST_LIKE_YOU':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'RESPONSE_LIKE_YOU':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'REQUEST_SECRET_APPEAL':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'RESPONSE_SECRET_APPEAL':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'REQUEST_LOCATION_APPEAL':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'RESPONSE_LOCATION_APPEAL':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'REQUEST_LOCATION_SECRET_APPEAL':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'RESPONSE_LOCATION_SECRET_APPEAL':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'REQUEST_LOCATION_LIKE_YOU':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'RESPONSE_LOCATION_LIKE_YOU':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    default:
      return state;
  }
};
