import React, { Component } from 'react';
import { View } from 'react-native';
import LoudSpeaker from 'icons/LoudSpeaker';
import CloseAlarm from 'icons/CloseAlarm';
import AlarmLabel from 'atoms/AlarmLabel';
import Button from 'atoms/Button';
import PropTypes from 'prop-types';
import styles from './styles';

export default class AlarmPanel extends Component {
  render = () => (
    <View style={styles.alarm}>
      <LoudSpeaker style={styles.icon} />
      <AlarmLabel text={this.props.text} style={styles.label} />
      <Button onPress={this.props.onPress}>
        <CloseAlarm style={styles.close} />
      </Button>
    </View>
  );
}

AlarmPanel.defaultProps = {
  text: '알람 텍스트',
  onPress: () => {},
};

AlarmPanel.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};
