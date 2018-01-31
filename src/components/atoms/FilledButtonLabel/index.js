import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles, { FONT_WHITE_COLOR } from 'atoms/styles';

export default class FilledButtonLabel extends Component {
  render = () => {
    const labelStyle = {
      color: this.props.color,
      fontSize: this.props.fontSize,
    };

    return (<Text style={[styles.filledButtonLabel, labelStyle]}>{this.props.children}</Text>);
  };
}

FilledButtonLabel.defaultProps = {
  color: FONT_WHITE_COLOR,
  fontSize: 16.8,
};

FilledButtonLabel.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

