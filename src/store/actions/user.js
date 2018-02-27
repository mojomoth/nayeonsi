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

export const getPoint = data => ({
  type: 'GET_POINT',
  payload: {
    data,
  },
});

export const getCosts = data => ({
  type: 'GET_COSTS',
  payload: {
    data,
  },
});

export const setPoint = data => ({
  type: 'SET_POINT',
  payload: data.point,
});

export const requestChargePoint = (key, point, action) => ({
  type: 'REQUEST_CHARGE_POINT',
  payload: {
    key,
    point,
    action,
  },
});
