import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import EmailJoin from 'screens/EmailJoin';
import { isEmail } from 'utils/validator';
import { createEmailUser } from 'store/actions/auth';

const MIN_PASSWORD_LENGTH = 6;

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    email: '',
    password: '',
    isEmailAlarm: false,
    isPasswordAlarm: true,
  }; 

  componentWillReceiveProps = (nextProps) => { 
    if (nextProps.state === 'CREATE_EMAIL_USER_FAILED') {
      Alert.alert('회원가입', nextProps.error);
    }

    if (nextProps.state === 'CREATED_EMAIL_USER') {
      this.nextStep();
    }
  };

  onBack = () => this.props.navigator.pop();

  onPress = () => {
    this.props.createEmailUser(this.state.email, this.state.password);
  };

  onEmailChange = (text) => {
    const isValidate = isEmail(text);

    this.setState({
      email: text,
      isEmailAlarm: !isValidate,
    });
  };

  onEmailFocus = () => {};
  onEmailBlur = () => {};
  
  onPasswordChange = (text) => {
    const isValidate = text.length >= MIN_PASSWORD_LENGTH;

    this.setState({
      password: text,
      isPasswordAlarm: !isValidate,
    });
  };

  onPasswordFocus = () => {};
  onPasswordBlur = () => {};

  nextStep = () => this.props.navigator.push({
    screen: 'JoinProfile', 
    passProps: {
      navigator: this.props.navigator,
      email: this.state.email,
      password: this.state.password,
    },
  }); 
  

  render = () => (
    <EmailJoin 
      onBack={this.onBack}
      onPress={this.onPress}
      email={this.state.email} 
      onEmailChange={this.onEmailChange}
      onEmailFocus={this.onEmailFocus}
      onEmailBlur={this.onEmailBlur}
      password={this.state.password} 
      onPasswordChange={this.onPasswordChange}
      onPasswordFocus={this.onPasswordFocus}
      onPasswordBlur={this.onPasswordBlur}
      isEmailAlarm={this.state.isEmailAlarm}
      isPasswordAlarm={this.state.isPasswordAlarm}
      emailAlarm="올바른 이메일을 입력하세요."
      passwordAlarm={`패스워드는 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`}
      isLoading={this.props.isProgress}
    />
  );
}

const mapStateToProps = state => ({
  uid: state.auth.uid,
  error: state.auth.error,
  isError: state.auth.isError,
  isProgress: state.auth.isProgress,
  state: state.auth.state,
});

const mapDispatchToProps = dispatch => ({
  createEmailUser: (email, password) => dispatch(createEmailUser(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
