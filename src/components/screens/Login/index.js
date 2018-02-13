import React, { Component } from 'react';
import { View } from 'react-native';
import Screen from 'atoms/Screen';
import Logo from 'atoms/Logo';
import CloseButton from 'systems/CloseButton';
import LoginSelect from './LoginSelect';
import EmailLogin from './EmailLogin';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Login extends Component {
  render = () => (
    <Screen style={styles.screen}>
      <CloseButton onPress={this.props.onClose} />
      <View style={styles.head}>
        <Logo style={styles.logo} />
      </View>
      <View style={styles.contents}>
        {
          false ? 
            <LoginSelect 
              onEmail={this.props.onEmail}
              onFacebook={this.props.onFacebook}
              onLogin={this.props.onLogin}
              emailButton={this.props.emailButton}
              facebookButton={this.props.facebookButton}
              loginButton={this.props.loginButton}
            />
          : 
            <EmailLogin 
              onRequest={this.props.onRequest}
              onForgot={this.props.onForgot}
              requestButton={this.props.requestButton}
              fogotPassword={this.props.fogotPassword}
            />
        }
      </View>
    </Screen>
  );
}

Login.defaultProps = {
  onClose: () => {},
  onEmail: () => {},
  onFacebook: () => {},
  onLogin: () => {},
  onRequest: () => {},
  onForgot: () => {},
  emailButton: '이메일로 금방 시작',
  facebookButton: '페이스북으로 바로 시작',
  loginButton: '이메일로 로그인',
  fogotPassword: '비밀번호를 잊어버렸어요.',
  requestButton: '로그인',
};

Login.propTypes = {
  onClose: PropTypes.func,
  onEmail: PropTypes.func,
  onFacebook: PropTypes.func,
  onLogin: PropTypes.func,
  onRequest: PropTypes.func,
  onForgot: PropTypes.func,
  emailButton: PropTypes.string,
  facebookButton: PropTypes.string,
  loginButton: PropTypes.string,
  fogotPassword: PropTypes.string,
  requestButton: PropTypes.string,
};

