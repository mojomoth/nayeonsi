import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles, { BACKGROUND_COLOR } from 'atoms/styles';

export default class Screen extends Component {
  render = () => {
    const screenStyle = {
      backgroundColor: this.props.backgroundColor,
    };

    return (
      <View style={[styles.screen, screenStyle]}>
        {this.props.children}
      </View>
    );
  };
}

Screen.defaultProps = {
  backgroundColor: BACKGROUND_COLOR,
};

Screen.propTypes = {
  backgroundColor: PropTypes.string,
};
