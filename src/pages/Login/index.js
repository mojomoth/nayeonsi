import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Login from 'screens/Login';
import PasswordSendPopup from 'popups/PasswordSendPopup';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };
  
  state = {
    isEntered: true,
  };

  onClose = () => this.setState({ isEntered: true });

  onJoin = () => this.props.navigator.push({
    screen: 'Join', 
    passProps: this.props.navigator,
  });

  onFacebook = () => Alert.alert('개발중', '현재개발중입니다');

  onLogin = () => this.setState({ isEntered: false });

  onRequest = () => {};

  onSendPassword = () => Alert.alert('개발중', '현재개발중입니다');

  onCloseModal = () => this.props.navigator.dismissModal();

  onForgot = () => this.props.navigator.showModal({
    screen: 'Modal', 
    passProps: {
      navigator: this.props.navigator,
      popup: <PasswordSendPopup onConfirm={this.onSendPassword} onCancel={this.onCloseModal} />,
    },
  });

  render = () => (
    <Login 
      onClose={this.onClose}
      onJoin={this.onJoin}
      onFacebook={this.onFacebook}
      onLogin={this.onLogin}
      onRequest={this.onRequest}
      onForgot={this.onForgot}
      isEntered={this.state.isEntered}
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
