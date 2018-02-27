import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Message from 'screens/Message';
import { requestOpenChat, getChat } from 'store/actions/chat';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    isLoading: false,
  };

  componentWillReceiveProps = (nextProps) => { 
    if (nextProps.chatState === 'RESPONSE_OPEN_CHAT') {
      Alert.alert('메세지', '대화방이 열렸습니다.\n적극적인 대화가 썸의 지름길!');
      this.setState({ isLoading: false });
      return;
    }

    if (nextProps.chatState === 'FINISH_CHAT') {
      this.setState({ isLoading: false });

      this.props.navigator.push({
        screen: 'Chat', 
        passProps: {
          chatKey: this.props.chatKey,
          target: this.props.target,
          navigator: this.props.navigator,
        },
      }); 
    }
  };

  onPress = (item) => {
    this.setState({ isLoading: true });

    if (item.isOpened) {
      this.enterRoom(item.key);
    } else {
      this.openRoom(item.key);
    }
  };

  getRooms = (data) => {
    const datas = [];
    
    for (const room of data) {
      const time = new Date(room.time);
      const lastTime = room.lastTime !== null && room.lastTime !== undefined ? 
        new Date(room.lastTime) : new Date(room.time);
      const isOpened = room.chatRoom !== null && room.chatRoom !== undefined;
      const text = room.lastText !== null && room.lastText !== undefined ?
        room.lastText : '대화를 시작 하세요.';
      datas.push({
        key: room.user.key,
        name: room.user.nickname,
        text: isOpened ? text : '대화를 시작 하세요.',
        date: isOpened ? 
          `${lastTime.getMonth() + 1}월 ${lastTime.getDate()}일` : 
          `${time.getMonth() + 1}월 ${time.getDate()}일`,
        source: { uri: room.user.images[0] },
        isOpened,
      });
    }

    return datas;
  };

  openRoom = key => this.props.requestOpenChat(this.props.user.key, key);

  enterRoom = key => this.props.getChat(this.props.user.key, key);

  render = () => (
    <Message
      navigator={this.props.navigator}
      point={this.props.point}
      alarm={this.props.alarm}
      isLoading={this.props.isProgress || this.state.isLoading}
      data={this.getRooms(this.props.rooms)}
      onPress={this.onPress}
    />
  );
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
  isProgress: state.chat.isProgress,
  chatState: state.chat.state,
  rooms: state.chat.rooms,
  chatKey: state.chat.chatKey,
  target: state.chat.target,
});

const mapDispatchToProps = dispatch => ({
  getChat: (key, you) => dispatch(getChat(key, you)),
  requestOpenChat: (key, you) => dispatch(requestOpenChat(key, you)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
