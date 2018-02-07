import React, { Component } from 'react';
import { View } from 'react-native';
import Label from 'atoms/Label';
import styles from './styles';

export default class Content extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Label style={styles.textLabel} text={this.props.text} />
      </View>
    );
  }
}
