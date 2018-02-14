import React, { Component } from 'react';
import { View } from 'react-native';
import BackPanel from 'atoms/BackPanel';
import styles from './styles';

export default class Modal extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render = () => (
    <View style={styles.view}>
      <BackPanel />
      <View style={styles.inner}>
        { this.props.children }
      </View>
    </View>
  );
}
