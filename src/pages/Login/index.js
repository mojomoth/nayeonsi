import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Login from 'screens/Login';
import PasswordSendPopup from 'popups/PasswordSendPopup';
import BasicPopup from 'popups/BasicPopup';
import { loginEmailUser } from 'store/actions/auth';
import { getUser } from 'store/actions/user';
import { fetchTest } from 'store/actions/test';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };
  
  state = {
    email: '',
    password: '',
    isEntered: true,
  };

  componentWillReceiveProps = (nextProps) => { 
    if (nextProps.authState === 'LOGIN_USER_FAILED') {
      this.props.navigator.showModal({
        screen: 'Modal', 
        passProps: {
          popup: <BasicPopup 
            title="로그인실패"
            text="아이디/비밀번호를 확인해주세요."
            buttonText="확인"
            onPress={this.onCloseModal}
          />,
        },
      });
    }

    if (nextProps.userState === 'SET_USER') {
      const { user } = nextProps;

      if (user) {
        this.props.navigator.pop();
      } else {
        this.moveJoinProfile();
      }
    }
  };

  onClose = () => this.setState({ isEntered: true });

  onJoin = () => {
    if (this.props.uid) {
      this.moveJoinProfile();
    } else {
      this.moveJoin();
    }
  };

  onEmailChange = (text) => {
    this.setState({
      email: text,
    });
  };

  onEmailFocus = () => {};
  onEmailBlur = () => {};
  
  onPasswordChange = (text) => {
    this.setState({
      password: text,
    });
  };

  onPasswordFocus = () => {};
  onPasswordBlur = () => {};

  onFacebook = () => {
    Alert.alert('개발중', '현재개발중입니다\n' + this.props.test.uid+ '\n'+this.props.uid+ '\n'+this.props.testData);
  };

  onLogin = () => this.setState({ isEntered: false });

  onRequest = () => {
    const { email } = this.state;
    const { password } = this.state;

    this.props.loginEmailUser(email, password); // ! > LOGIN_USER
  };

  onSendPassword = () => Alert.alert('개발중', '현재개발중입니다');

  onCloseModal = () => this.props.navigator.dismissModal();

  onForgot = () => this.props.navigator.showModal({
    screen: 'Modal', 
    passProps: {
      navigator: this.props.navigator,
      popup: <PasswordSendPopup onConfirm={this.onSendPassword} onCancel={this.onCloseModal} />,
    },
  });

  moveJoin = () => this.props.navigator.push({
    screen: 'Join', 
    passProps: this.props.navigator,
  });

  moveJoinProfile = () => this.props.navigator.push({
    screen: 'JoinProfile', 
    passProps: {
      navigator: this.props.navigator,
      email: this.state.email,
      password: this.state.password,
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
      email={this.state.email} 
      onEmailChange={this.onEmailChange}
      onEmailFocus={this.onEmailFocus}
      onEmailBlur={this.onEmailBlur}
      password={this.state.password} 
      onPasswordChange={this.onPasswordChange}
      onPasswordFocus={this.onPasswordFocus}
      onPasswordBlur={this.onPasswordBlur}
      isLoading={this.props.isProgress}
    />
  );
}

const mapStateToProps = state => ({
  uid: state.auth.uid,
  error: state.auth.error,
  isError: state.auth.isError,
  isProgress: state.auth.isProgress,
  user: state.user.user,
  authState: state.auth.state,
  userState: state.user.state,
  test: state.test,
  testData: state.test.data,
});

const mapDispatchToProps = dispatch => ({
  loginEmailUser: (email, password) => dispatch(loginEmailUser(email, password)),
  getUser: uid => dispatch(getUser(uid)),
  fetchTest: () => dispatch(fetchTest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
