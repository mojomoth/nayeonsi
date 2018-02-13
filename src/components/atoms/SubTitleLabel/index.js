import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from 'atoms/styles';

export default class SubTitleLabel extends Component {
  render = () => <Text style={[styles.subTitleLabel, this.props.style]}>{this.props.text}</Text>;
}
