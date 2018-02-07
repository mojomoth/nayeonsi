import React, { Component } from 'react';
import { View } from 'react-native';
import Label from 'atoms/Label';
import styles from './styles';

export default class PointButtonLabel extends Component {
  render = () => (
    <View style={styles.pointButtonLabel}>
      <Label style={styles.pointButtonLabelText} text={this.props.point} />
    </View>
  );
}
