import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

export default class LikeButton extends Component {
  render = () => (
    <View style={styles.infoIcon}>
      {this.props.children}
    </View>
  );
}
