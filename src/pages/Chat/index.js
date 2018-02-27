import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import Chat from 'screens/Chat';
import { getMessages, writeMessage } from 'store/actions/chat';

import firebase from 'lib/firebase';

const database = firebase.database();
const MESSAGE_GAP = 1000 * 60 * 2;

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    text: '',
    messages: [],
    isLoading: false,
  };

  componentDidMount = () => {
    const key = this.props.chatKey;
    database.ref('chat_rooms').child(key).orderByValue().on('value', (snap) => {
      const data = snap.val();
      this.props.getMessages(data);
    });
  };

  componentWillReceiveProps = async (nextProps) => { 
    if (nextProps.chatState === 'SET_MESSAGES') {
      const { messages } = nextProps;
      this.setState({ isLoading: true });
      const data = await this.makeText(messages);
      data.reverse();
      this.setState({ messages: data, isLoading: false });
    }
  }

  onBack = () => this.exitRoom();

  onWrite = () => {
    this.props.writeMessage(
      this.props.chatKey,
      this.props.user.key,
      this.props.target.key,
      this.state.text,
      Date.now(),
    );

    this.setState({ text: '' });
    Keyboard.dismiss();
  };

  onChangeText = (text) => {
    this.setState({
      text,
    });
  };

  getDayOfTheWeek = (num) => {
    switch (num) {
      default:
      case 1: return '월';
      case 2: return '화';
      case 3: return '수';
      case 4: return '목';
      case 5: return '금';
      case 6: return '토';
      case 0: return '일';
    }
  }

  getImage = () => ({ uri: this.props.target.images[0] });

  makeText = async (messages) => {
    const datas = [];

    let beforeKey = null;
    let beforeTime = 0;
    let beforeData = null;
    let beforeDate = -1;
    let messageKey = 0;

    for (const message of messages) {
      if (message === null) continue;

      const data = { 
        isFace: true, 
        isTime: true, 
        type: 0, 
        text: '', 
        time: '', 
        source: null,
        key: messageKey,
      };

      const { key, text } = message;
      const time = new Date(message.time);
      messageKey += 1;

      if (beforeDate !== time.getDate()) {
        const infoData = { ...data };
        infoData.text = `${time.getFullYear()}.${time.getMonth() + 1}.${time.getDate()} ${this.getDayOfTheWeek(time.getDay())}`;
        infoData.type = 0;
        datas.push(infoData);
        messageKey += 1;
      }

      data.type = key === this.props.user.key ? 1 : 2;
      data.text = text;

      const hours = time.getHours();
      const half = hours >= 12 ? '오후' : '오전';
      data.time = `${half} ${hours}:${time.getMinutes()}`;

      const snap = await database.ref('users').child(key).once('value');
      data.source = { uri: snap.val().images[0] };
      
      data.isFace = ((beforeTime > 0 && beforeTime + MESSAGE_GAP > time) 
        || beforeKey !== key);

      if (beforeData !== null && beforeData.key === key) {
        beforeData.isTime = false;
      }

      datas.push(data);

      beforeTime = time;
      beforeKey = key;
      beforeData = data;
      beforeDate = time.getDate();
    }

    return datas;
  };

  exitRoom = async () => {
    this.setState({ isLoading: true });
    const key = this.props.chatKey;
    await database.ref('chat_rooms').child(key).off('value');
    this.setState({ isLoading: false });
    this.props.navigator.pop();
  };

  render = () => (
    <Chat
      navigator={this.props.navigator}
      source={this.getImage()}
      onBack={this.onBack}
      onMore={this.onMore}
      onWrite={this.onWrite}
      onChangeText={this.onChangeText}
      onFocus={this.onFocusText}
      onBlur={this.onBlurText}
      text={this.state.text}  
      data={this.state.messages}
      name={this.props.target.nickname}
      isLoading={this.props.isProgress || this.state.isLoading}
    />
  );
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
  isProgress: state.chat.isProgress,
  chatState: state.chat.state,
  messages: state.chat.messages,
});

const mapDispatchToProps = dispatch => ({
  getMessages: data => dispatch(getMessages(data)),
  writeMessage: (chatKey, key, you, text, time) => dispatch(writeMessage(chatKey, key, you, text, time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
