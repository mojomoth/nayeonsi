export const getCards = key => ({
  type: 'GET_CARDS',
  payload: {
    key,
  },
});

export const getTodayCard = (key, targetGender) => ({
  type: 'GET_TODAY_CARD',
  payload: {
    key,
    targetGender,
  },
});

export const getCardHistories = key => ({
  type: 'GET_CARD_HISTORIES',
  payload: {
    key,
  },
});

export const getMatchedCards = key => ({
  type: 'GET_MATCHED_CARDS',
  payload: {
    key,
  },
});
