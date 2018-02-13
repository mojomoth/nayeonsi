import React, { Component } from 'react';
import { View } from 'react-native';
import Label from 'atoms/Label';
import styles from './styles';

export default class AboutLabel extends Component {
  render = () => (
    <View style={styles.aboutLabel}>
      <Label style={styles.aboutTitle} text={this.props.label} />
      <View style={styles.aboutBox}>
        {this.props.children}
      </View>
    </View>
  );
}
