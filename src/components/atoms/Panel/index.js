import React, { Component } from 'react';
import { View } from 'react-native';
import { PixelRatio } from 'constants/size';
import PropTypes from 'prop-types';
import styles from 'atoms/styles';

export default class Panel extends Component {
  render = () => {
    const panelStyle = {
      width: this.props.width,
      height: this.props.height,
    };

    return (
      <View style={[styles.panel, panelStyle, this.props.style]}>
        {this.props.children}
      </View>
    );
  };
}

Panel.defaultProps = {
  width: 374 * PixelRatio,
  height: 221 * PixelRatio,
};

Panel.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
