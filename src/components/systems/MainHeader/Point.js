import React, { Component } from 'react';
import { View } from 'react-native';
import PointIcon from 'icons/Point';
import Label from 'atoms/Label';
import styles from './styles';

export default class Point extends Component {
  render = () => (
    <View style={styles.pointBox}>
      <Label style={styles.pointLabel} text={this.props.point} />
      <PointIcon style={styles.pointIcon} />
    </View>
  );
}
