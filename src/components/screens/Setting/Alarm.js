import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import AlarmCircleIcon from 'icons/AlarmCircle';
import styles from './styles';

export default class Alarm extends Component {
  render = () => {
    const settingButton = [
      (this.props.isActivate ? styles.active : styles.deactive),
      styles.settingButton];

    const settingStatus = [
      (this.props.isActivate ? styles.activeStatus : styles.deactiveStatus),
      styles.settingStatus];

    return (
      <View style={styles.settingBox}>
        <Button style={settingButton} onPress={this.props.onPress}>
          <AlarmCircleIcon type={this.props.isActivate ? 'red' : 'gray'} />
        </Button>
        <View style={settingStatus} pointerEvents="none">
          <Label style={styles.settingStatusLabel} text={this.props.isActivate ? 'ON' : 'OFF'} />
        </View>
        <Label style={styles.settingLabel} text={"원활한 서비스를 위해\n반드시 알림을 ON 헤주세요."} />      
      </View>
    );
  };
}

Alarm.defaultProps = {
  isActivate: true,
};

Alarm.propTypes = {
  isActivate: PropTypes.bool,
};
