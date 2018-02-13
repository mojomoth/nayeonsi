import React, { Component } from 'react';
import { View } from 'react-native';
import InputWrapper from 'atoms/InputWrapper';
import TextInput from 'atoms/TextInput';
import ArrowIcon from 'icons/Arrow';
import styles from './styles';

export default class Content extends Component {
  render() {
    return (
      <View style={styles.content}>
        <InputWrapper style={styles.wrapper}>
          <ArrowIcon />
          <TextInput style={styles.textInput} placeholder="인증번호 입력" />
        </InputWrapper>
      </View>
    );
  }
}
