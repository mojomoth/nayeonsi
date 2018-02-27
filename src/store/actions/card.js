export const getCards = data => ({
  type: 'GET_CARDS',
  payload: {
    data,
  },
});

export const getAttractions = data => ({
  type: 'GET_ATTRACTIONS',
  payload: {
    data,
  },
});

export const getHistories = data => ({
  type: 'GET_HISTORIES',
  payload: {
    data,
  },
});

export const setHistories = data => ({
  type: 'SET_HISTORIES',
  payload: {
    ...data,
  },
});

export const removeHistory = (key, category, cardKey) => ({
  type: 'REMOVE_HISTORY',
  payload: {
    key,
    category,
    cardKey,
  },
});

export const requestTodayCard = (key, targetGender) => ({
  type: 'REQUEST_TODAY_CARD',
  payload: {
    key,
    targetGender,
  },
});

export const requestTypeCard = (key, type, targetGender) => ({
  type: 'REQUEST_TYPE_CARD',
  payload: {
    key,
    type,
    targetGender,
  },
});

export const requestLikeYou = (key, you) => ({
  type: 'REQUEST_LIKE_YOU',
  payload: {
    key,
    you,
  },
});

export const requestSecretAppeal = (key, you) => ({
  type: 'REQUEST_SECRET_APPEAL',
  payload: {
    key,
    you,
  },
});

export const requestLocationAppeal = (key, location, targetGender, count) => ({
  type: 'REQUEST_LOCATION_APPEAL',
  payload: {
    key,
    location, 
    targetGender, 
    count, 
  },
});

export const requestLocationSecretAppeal = (key, location, targetGender, count) => ({
  type: 'REQUEST_LOCATION_SECRET_APPEAL',
  payload: {
    key,
    location, 
    targetGender, 
    count, 
  },
});

export const requestLocationLikeYou = (key, location, targetGender, count) => ({
  type: 'REQUEST_LOCATION_LIKE_YOU',
  payload: {
    key,
    location, 
    targetGender, 
    count, 
  },
});
