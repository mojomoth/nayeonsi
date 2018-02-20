import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import firebase from 'lib/firebase';
import { OPEN_CHAT } from 'constants/server';

const database = firebase.database();

function* getMatches(action) {
  const { data } = action.payload;
  const rooms = [];

  for (const key of Object.keys(data)) {
    const snap = yield database.ref('/users').child(key).once('value');
    const user = snap.val();
    user.key = key;

    const match = data[key];
    rooms.push({ 
      user, 
      chatRoom: match.chat_room, 
      lastTime: match.last_time,
      lastText: match.last_text,
      time: match.time,
    });
  }

  yield put({ type: 'SET_MATCHES', payload: rooms });
}

function* setMatches() {
  yield put({ type: 'FINISH_MATCHES' });
}

function* getChat(action) {
  const { key, you } = action.payload;

  let snap = yield database.ref('/matches').child(key).child(you).once('value');
  const match = snap.val();
  const chatKey = match.chat_room;

  snap = yield database.ref('/users').child(you).once('value');
  const target = snap.val();
  target.key = you;

  yield put({ type: 'SET_CHAT', payload: { target, chatKey } });
}

function* setChat() {
  yield put({ type: 'FINISH_CHAT' });
}

function* getMessages(action) {
  const { data } = action.payload;
  const messages = [];

  for (const key of Object.keys(data)) {
    const snap = yield database.ref('/chat_messages').child(key).once('value');
    messages.push(snap.val());
  }

  yield put({ type: 'SET_MESSAGES', payload: messages });
}

function* setMessages() {
  yield put({ type: 'FINISH_MESSAGES' });
}

function* writeMessage(action) {
  const { 
    chatKey, 
    key, 
    you,
    text, 
    time,
  } = action.payload;
  
  const data = { key, text, time };
  const message = yield database.ref('/chat_messages').push(data);
  const messageKey = message.key;

  yield database.ref('/chat_rooms').child(chatKey).child(messageKey).set(time);
  yield database.ref('/matches').child(key).child(you).child('last_time').set(time);
  yield database.ref('/matches').child(key).child(you).child('last_text').set(text);

  yield put({ type: 'FINISH_MESSAGES' });
}

function* requestOpenChat(action) {
  const { key, you } = action.payload;
  const response = axios.get(`${OPEN_CHAT}?key=${key}&you=${you}`);
  yield put({ type: 'RESPONSE_OPEN_CHAT', payload: response.data });
}

export default function* chatSagas() {
  yield takeEvery('GET_MATCHES', getMatches);
  yield takeEvery('SET_MATCHES', setMatches);
  yield takeEvery('GET_CHAT', getChat);
  yield takeEvery('SET_CHAT', setChat);
  yield takeEvery('GET_MESSAGES', getMessages);
  yield takeEvery('SET_MESSAGES', setMessages);
  yield takeEvery('WRITE_MESSAGE', writeMessage);
  yield takeEvery('REQUEST_OPEN_CHAT', requestOpenChat);
}

