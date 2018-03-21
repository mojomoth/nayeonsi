export const getCosts = data => ({
  type: 'GET_COSTS',
  payload: {
    data,
  },
});

export const getSetting = data => ({
  type: 'GET_SETTING',
  payload: {
    data,
  },
});

export const getNotice = data => ({
  type: 'GET_NOTICE',
  payload: {
    data,
  },
});

export const getEvent = data => ({
  type: 'GET_EVENT',
  payload: {
    data,
  },
});
