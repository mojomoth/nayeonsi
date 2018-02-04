import React, { Component } from 'react';
import { TextInput as Input } from 'react-native';
import styles from 'atoms/styles';
import { FONT_GRAY_COLOR } from 'constants/color';

export default class TextInput extends Component {
  render = () => <Input style={styles.textInput} {...this.props} placeholderTextColor={FONT_GRAY_COLOR} />;
}
