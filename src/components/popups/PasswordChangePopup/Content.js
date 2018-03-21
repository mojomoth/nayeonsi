import React, { Component } from 'react';
import { View } from 'react-native';
import InputWrapper from 'atoms/InputWrapper';
import TextInput from 'atoms/TextInput';
import LockIcon from 'icons/Lock';
import ArrowIcon from 'icons/Arrow';
import styles from './styles';

export default class Content extends Component {
  render = () => (
    <View style={styles.content}>
      <InputWrapper style={styles.wrapper}>
        <LockIcon />
        <TextInput 
          style={styles.textInput} 
          onChangeText={this.props.onChangeCurrentPassword} 
          placeholder="현재 비밀번호" 
          secureTextEntry
        />
      </InputWrapper>

      <InputWrapper style={styles.wrapper}>
        <ArrowIcon />
        <TextInput 
          style={styles.textInput} 
          onChangeText={this.props.onChangeNewPassword} 
          placeholder="변경될 비밀번호" 
          secureTextEntry
        />
      </InputWrapper>

      <InputWrapper style={styles.wrapper}>
        <ArrowIcon />
        <TextInput 
          style={styles.textInput} 
          onChangeText={this.props.onChangeRepeatPassword} 
          placeholder="변경될 비밀번호 확인" 
          secureTextEntry
        />
      </InputWrapper>
    </View>
  );
}
