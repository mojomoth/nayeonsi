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
        <TextInput style={styles.textInput} placeholder="이메일" />
      </InputWrapper>

      { this.props.isEmailAlarm ? 
        <AlarmLabel text={this.props.emailAlarm} style={styles.alarmLabel} /> 
      : null }

      <InputWrapper style={styles.passwordWrapper}>
        <LockIcon />
        <TextInput style={styles.textInput} placeholder="비밀번호" />
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
};

Content.propTypes = {
  isEmailAlarm: PropTypes.bool,
  isPasswordAlarm: PropTypes.bool,
};
