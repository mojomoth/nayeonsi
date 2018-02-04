import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'atoms/styles';
import { PixelRatio } from 'constants/size';
import { FONT_WHITE_COLOR } from 'constants/color';

export default class FilledButtonLabel extends Component {
  render = () => {
    const labelStyle = {
      color: this.props.color,
      fontSize: this.props.fontSize,
    };

    return (
      <Text style={[styles.filledButtonLabel, labelStyle, this.props.style]}>
        {this.props.children}
      </Text>
    );
  };
}

FilledButtonLabel.defaultProps = {
  color: FONT_WHITE_COLOR,
  fontSize: 16.8 * PixelRatio,
};

FilledButtonLabel.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

