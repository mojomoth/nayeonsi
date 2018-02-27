import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Label from 'atoms/Label';
import Button from 'atoms/Button';
import SwitchIcon from 'icons/Switch';
import styles from './styles';

export default class SwitchBox extends Component {
  render = () => (
    <View style={styles.itemBox}>
      <Label style={styles.itemBoxLabel} text={this.props.text} />
      <Button onPress={this.props.onPress}>
        <SwitchIcon enabled={this.props.isActivate} />
      </Button>
    </View>     
  );
}

SwitchBox.defaultProps = {
  isActivate: true,
};

SwitchBox.propTypes = {
  isActivate: PropTypes.bool,
};
