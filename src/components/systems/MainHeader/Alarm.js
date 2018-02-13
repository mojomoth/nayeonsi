import React, { Component } from 'react';
import { View } from 'react-native';
import AlarmIcon from 'icons/Alarm';
import styles from './styles';

export default class Alarm extends Component {
  render = () => (
    <View style={styles.alarmBox}>
      <AlarmIcon style={styles.alarmIcon} />
    </View>
  );
}
