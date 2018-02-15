export const getUser = uid => ({
  type: 'GET_USER',
  payload: {
    uid,
  },
});

export const getTargetUser = uid => ({
  type: 'GET_TARGET_USER',
  payload: {
    uid,
  },
});

export const getUserByLocation = location => ({
  type: 'GET_USER_BY_LOCATION',
  payload: {
    location,
  },
});
