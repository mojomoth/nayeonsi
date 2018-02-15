import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import InputWrapper from 'atoms/InputWrapper';
import TextInput from 'atoms/TextInput';
import MailIcon from 'icons/Mail';
import LockIcon from 'icons/Lock';
import AlarmLabel from 'atoms/AlarmLabel';
import styles from './styles';

export default class Content extends Component {
  render = () => (
    <View style={styles.content}>
      <InputWrapper style={styles.emailWrapper}>
        <MailIcon />
        <TextInput 
          style={styles.textInput} 
          placeholder="이메일" 
          value={this.props.email} 
          onChangeText={this.props.onEmailChange}
          onFocus={this.props.onEmailFocus}
          onBlur={this.props.onEmailBlur}
          keyboardType={'email-address'}
        />
      </InputWrapper>

      { this.props.isEmailAlarm ? 
        <AlarmLabel text={this.props.emailAlarm} style={styles.alarmLabel} /> 
      : null }

      <InputWrapper style={styles.passwordWrapper}>
        <LockIcon />
        <TextInput 
          style={styles.textInput} 
          placeholder="비밀번호" 
          value={this.props.password} 
          onChangeText={this.props.onPasswordChange}
          onFocus={this.props.onPasswordFocus}
          onBlur={this.props.onPasswordBlur}
          secureTextEntry
        />
      </InputWrapper>
        
      { this.props.isPasswordAlarm ? 
        <AlarmLabel text={this.props.passwordAlarm} style={styles.alarmLabel} /> 
      : null}
    </View>
  );
}

Content.defaultProps = {
  isEmailAlarm: false,
  isPasswordAlarm: false,
  emailAlarm: '',
  passwordAlarm: '',
};

Content.propTypes = {
  isEmailAlarm: PropTypes.bool,
  isPasswordAlarm: PropTypes.bool,
  emailAlarm: PropTypes.string,
  passwordAlarm: PropTypes.string,
};
