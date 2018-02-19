const DEFAULT_STATE = {
  cards: null,
  me: null,
  you: null,
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

    case 'GET_CARD_HISTORIES':
      return {
        ...state,
        state: action.type,
        isProgress: true,
      };

    case 'SET_CARD_HISTORIES':
      return {
        ...state,
        me: action.payload.me,
        you: action.payload.you,
        state: action.type,
        isProgress: false,
      };

    default:
      return state;
  }
};
