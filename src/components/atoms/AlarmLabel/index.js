import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from 'atoms/styles';

export default class AlarmLabel extends Component {
  render = () => <Text style={styles.alarmLabel}>{this.props.text}</Text>;
}
