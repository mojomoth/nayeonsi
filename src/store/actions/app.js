export const getCosts = data => ({
  type: 'GET_COSTS',
  payload: {
    data,
  },
});

export const getSetting = key => ({
  type: 'GET_SETTING',
  payload: {
    key,
  },
});

export const fixSetting = (key, data) => ({
  type: 'FIX_SETTING',
  payload: {
    key,
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

export const setAlarm = text => ({
  type: 'SET_ALARM',
  payload: {
    text,
  },
});
