import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from 'atoms/styles';

export default class TitleLabel extends Component {
  render = () => <Text style={[styles.titleLabel, this.props.style]}>{this.props.text}</Text>;
}
