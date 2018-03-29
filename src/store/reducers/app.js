const DEFAULT_STATE = {
  state: null,
  isProgress: false,
  isSetting: false,
  costs: [],
  notice: [],
  event: [],
  isMeet: false,
  isNoti: false,
  isTodayNoti: false,
  isLikeNoti: false,
  isAppealNoti: false,
  isMatchNoti: false,
  isMessageNoti: false,
  alarm: '',
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

    case 'GET_SETTING':
      return {
        ...state,
        state: action.type,
        isProgress: true,
        isSetting: false,
      };
    
    case 'FIX_SETTING':
      return {
        ...state,
        state: action.type,
        isProgress: true,
        isSetting: true,
      };

    case 'SET_SETTING':
      return {
        ...state,
        state: action.type,
        isProgress: false,
        isMeet: action.payload.isMeet,
        isNoti: action.payload.isNoti,
        isTodayNoti: action.payload.isTodayNoti,
        isLikeNoti: action.payload.isLikeNoti,
        isAppealNoti: action.payload.isAppealNoti,
        isMatchNoti: action.payload.isMatchNoti,
        isMessageNoti: action.payload.isMessageNoti,
      };

    case 'FINISH_SETTING':
      return {
        ...state,
        state: action.type,
        isProgress: false,
      };

    case 'SET_ALARM':
      return {
        ...state,
        state: action.type,
        alarm: action.payload.text,
      };

    default:
      return state;
  }
};
