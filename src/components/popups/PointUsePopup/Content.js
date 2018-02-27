import React, { Component } from 'react';
import { View } from 'react-native';
import Label from 'atoms/Label';
import PointIcon from 'icons/Point';
import styles from './styles';

export default class Content extends Component {
  render = () => (
    <View style={styles.content}>
      <View style={styles.pointBox}>
        <PointIcon style={styles.pointIcon} />
        <Label style={styles.pointLabel} text={this.props.point} />
      </View>
    </View>
  );
}
