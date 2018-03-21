import React, { Component } from 'react';
import { Linking } from 'react-native';
import { connect } from 'react-redux';
import Login from 'screens/Login';
import PasswordSendPopup from 'popups/PasswordSendPopup';
import BasicPopup from 'popups/BasicPopup';
import { loginFacebookUser, loginEmailUser } from 'store/actions/auth';
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
      this.openPopup('로그인 실패', '아이디/비밀번호를 확인해주세요.');
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
    this.props.loginFacebookUser();
  };

  onLogin = () => this.setState({ isEntered: false });

  onRequest = () => {
    const { email } = this.state;
    const { password } = this.state;

    this.props.loginEmailUser(email, password); // ! > LOGIN_USER
  };

  onChangeSendEmail = (text) => {
    this.sendEmail = text;
  };

  onSendEmail = () => {
    const mail = this.sendEmail;
    const subject = '[나연시] 비밀번호 변경 이메일 입니다.';
    const body = "나연시에서 보내는 비밀번호 변경 메일 입니다.%0D%0A아래의 링크를 클릭하여 비밀번호를 변경해주세요.%0D%0A<a href='http://www.nayeonsi.com/changePassword'>비밀번호 변경 링크</a>%0D%0A%0D%0A(지속적인 스팸메일이 오는 경우 고객센터에 문의해주세요.)";

    const link = `mailto:${mail}?&subject=${subject}&body=${body}`;
    Linking.openURL(link);

    this.onCloseModal();
    this.openPopup('이메일전송', '임시 비밀번호를 이용하여\n비밀번호를 변경하는 메일을 전송했습니다.');
  };

  onCloseModal = () => this.props.navigator.dismissModal({ animationType: 'fade' });

  onForgot = () => this.props.navigator.showModal({
    screen: 'Modal', 
    animationType: 'fade',
    passProps: {
      navigator: this.props.navigator,
      popup: <PasswordSendPopup 
        onChangeText={this.onChangeSendEmail}
        onConfirm={this.onSendEmail} 
        onCancel={this.onCloseModal} 
      />,
    },
  });

  openPopup = (title, text) => this.props.navigator.showModal({
    screen: 'Modal', 
    animationType: 'fade',
    passProps: {
      popup: <BasicPopup 
        title={title}
        text={text}
        buttonText="확인"
        onPress={this.onCloseModal}
      />,
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
  loginFacebookUser: () => dispatch(loginFacebookUser()),
  loginEmailUser: (email, password) => dispatch(loginEmailUser(email, password)),
  getUser: uid => dispatch(getUser(uid)),
  fetchTest: () => dispatch(fetchTest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
