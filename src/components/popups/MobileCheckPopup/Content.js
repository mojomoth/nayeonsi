import React, { Component } from 'react';
import { View } from 'react-native';
import InputWrapper from 'atoms/InputWrapper';
import TextInput from 'atoms/TextInput';
import PhoneIcon from 'icons/Phone';
import styles from './styles';

export default class Content extends Component {
  render() {
    return (
      <View style={styles.content}>
        <InputWrapper style={styles.wrapper}>
          <PhoneIcon />
          <TextInput style={styles.textInput} placeholder="휴대전화 번호" />
        </InputWrapper>
      </View>
    );
  }
}
