import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import LocationCircleIcon from 'icons/LocationCircle';
import styles from './styles';

export default class GPS extends Component {
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
          <LocationCircleIcon type={this.props.isActivate ? 'red' : 'gray'} />
        </Button>
        <View style={settingStatus} pointerEvents="none">
          <Label style={styles.settingStatusLabel} text={this.props.isActivate ? 'ON' : 'OFF'} />
        </View>
        <Label style={styles.settingLabel} text={"원활한 서비스를 위해\n반드시 GPS를 ON 헤주세요."} />      
      </View>
    );
  };
}

GPS.defaultProps = {
  isActivate: true,
};

GPS.propTypes = {
  isActivate: PropTypes.bool,
};
