import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Login from 'screens/Login';
import PasswordSendPopup from 'popups/PasswordSendPopup';
import { fetchTest } from 'store/actions/test';

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

  render = () => {console.log(this.props.test);
    return(
    <Login 
      onClose={this.onClose}
      onJoin={this.onJoin}
      onFacebook={this.props.fetchTest}
      onLogin={this.onLogin}
      onRequest={this.onRequest}
      onForgot={this.onForgot}
      isEntered={this.state.isEntered}
    />
  )};
}

const mapStateToProps = state => ({
  test: state.test,
});

const mapDispatchToProps = dispatch => ({

  fetchTest: () => dispatch(fetchTest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
