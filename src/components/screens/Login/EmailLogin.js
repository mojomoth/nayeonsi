
import React, { Component } from 'react';
import { View } from 'react-native';
import InputWrapper from 'atoms/InputWrapper';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import Label from 'atoms/Label';
import TextInput from 'atoms/TextInput';
import Button from 'atoms/Button';
import MailIcon from 'icons/Mail';
import LockIcon from 'icons/Lock';
import styles from './styles';

export default class LoginSelect extends Component {
  render = () => (
    <View style={styles.emailLogin}>
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

      <FilledButton style={styles.loginButton} onPress={this.props.onRequest}>
        <FilledButtonLabel style={styles.loginButtonLabel}>
          {this.props.requestButton}
        </FilledButtonLabel>
      </FilledButton>

      <View style={styles.fogotPassword}>
        <Button onPress={this.props.onForgot} style={styles.fogotPasswordButton}>
          <Label style={styles.fogotPasswordLabel} text={this.props.fogotPassword} />
        </Button>
      </View>
    </View>
  );
}
