import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

export default class Loading extends Component {
  render = () => (
    <View style={styles.cover}>
      <ActivityIndicator style={styles.loading} />
    </View>
  );
}

