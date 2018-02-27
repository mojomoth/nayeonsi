import React, { Component } from 'react';
import { View } from 'react-native';
import Label from 'atoms/Label';
import LogoIcon from 'atoms/Logo';
import styles from './styles';

export default class Point extends Component {
  render = () => (
    <View style={styles.pointBox}>
      <View style={styles.pointTop}>
        <LogoIcon style={styles.pointLogo} />
        <Label style={styles.pointLabel} text={this.props.pointText} />
      </View>
      <Label style={styles.pointInfoLabel} text={this.props.pointInfoText} />
    </View>
  );
}
