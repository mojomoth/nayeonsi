import React, { Component } from 'react';
import { View } from 'react-native';
import Label from 'atoms/Label';
import PointIcon from 'icons/Point';
import styles from './styles';

export default class Content extends Component {
  render() {
    return (
      <View style={styles.content}>
        <View style={styles.pointBox}>
          <PointIcon style={styles.pointIcon} />
          <Label style={styles.pointLabel} text={this.props.point} />
        </View>
        <Label style={styles.aboutAppealLabel} text={this.props.aboutAppeal} />
      </View>
    );
  }
}
