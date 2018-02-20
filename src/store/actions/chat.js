export const getMatches = data => ({
  type: 'GET_MATCHES',
  payload: {
    data,
  },
});

export const getChat = (key, you) => ({
  type: 'GET_CHAT',
  payload: {
    key,
    you,
  },
});

export const getMessages = data => ({
  type: 'GET_MESSAGES',
  payload: {
    data,
  },
});

export const writeMessage = (chatKey, key, you, text, time) => ({
  type: 'WRITE_MESSAGE',
  payload: {
    chatKey,
    key,
    you,
    text,
    time,
  },
});

export const requestOpenChat = (key, you) => ({
  type: 'REQUEST_OPEN_CHAT',
  payload: {
    key,
    you,
  },
});
