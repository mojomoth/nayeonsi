import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from 'atoms/styles';

export default class Label extends Component {
  render = () => (
    <Text style={[styles.label, this.props.style]}>
      {this.props.text}
      {this.props.children}
    </Text>)
  ;
}
