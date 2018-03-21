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
