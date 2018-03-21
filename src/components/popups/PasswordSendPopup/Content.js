import React, { Component } from 'react';
import { View } from 'react-native';
import InputWrapper from 'atoms/InputWrapper';
import TextInput from 'atoms/TextInput';
import MailIcon from 'icons/Mail';
import styles from './styles';

export default class Content extends Component {
  render = () => (
    <View style={styles.content}>
      <InputWrapper style={styles.wrapper}>
        <MailIcon />
        <TextInput 
          onChangeText={this.props.onChangeText}
          style={styles.textInput} 
          placeholder="이메일" 
        />
      </InputWrapper>
    </View>
  );
}
