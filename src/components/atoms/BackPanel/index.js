import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'atoms/styles';
import { BLACK_COLOR } from 'constants/color';

export default class BackPanel extends Component {
  render = () => {
    const backStyle = {
      backgroundColor: this.props.color,
      opacity: this.props.opacity,
    };

    return (
      <View style={[styles.backPanel, backStyle, this.props.style]}>
        {this.props.children}
      </View>
    );
  };
}

BackPanel.defaultProps = {
  color: BLACK_COLOR,
  opacity: 0.7,  
};

BackPanel.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.number,
};

