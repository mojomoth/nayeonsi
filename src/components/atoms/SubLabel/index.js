import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from 'atoms/styles';

export default class SubLabel extends Component {
  render = () => <Text style={styles.subLabel}>{this.props.text}</Text>;
}
