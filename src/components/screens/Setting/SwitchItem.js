import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Label from 'atoms/Label';
import Switch from 'atoms/Switch';
import styles from './styles';

export default class SwitchBox extends Component {
  render = () => (
    <View style={styles.itemBox}>
      <Label style={styles.itemBoxLabel} text={this.props.text} />
      <Switch enabled={this.props.isActivate} />
    </View>     
  );
}

SwitchBox.defaultProps = {
  isActivate: true,
};

SwitchBox.propTypes = {
  isActivate: PropTypes.bool,
};
