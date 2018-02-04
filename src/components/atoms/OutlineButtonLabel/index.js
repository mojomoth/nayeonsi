import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'atoms/styles';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  DISABLED_COLOR,
} from 'constants/color';

export default class OutlineButtonLabel extends Component {
  render = () => {
    const labelStyle = {
      color: this.props.enabled ? this.props.color : this.props.disabledColor,
      fontSize: this.props.fontSize,
    };

    return (
      <Text style={[styles.outlineButtonLabel, labelStyle, this.props.style]}>
        {this.props.children}
      </Text>
    );
  };
}

OutlineButtonLabel.defaultProps = {
  color: COLOR,
  disabledColor: DISABLED_COLOR,
  fontSize: 16.8 * PixelRatio,
  enabled: true,
};

OutlineButtonLabel.propTypes = {
  color: PropTypes.string,
  disabledColor: PropTypes.string,
  fontSize: PropTypes.number,
  enabled: PropTypes.bool,
};

