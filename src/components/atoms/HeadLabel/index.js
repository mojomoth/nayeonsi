import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from 'atoms/styles';

export default class HeadLabel extends Component {
  render = () => <Text style={[styles.headLabel, this.props.style]}>{this.props.text}</Text>;
}
