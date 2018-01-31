import React, { Component } from 'react';
import { View } from 'react-native';
import styles from 'atoms/styles';

export default class Button extends Component {
  render = () => {
    const buttonStyle = {
      width: this.props.size,
      height: this.props.size,
      borderRadius: this.props.size * 0.5,
      borderColor: this.props.enabled ? this.props.color : this.props.disabledColor,
    };

    return (<View style={[styles.outlineRoundButton, buttonStyle]}>{this.props.children}</View>);
  };
}
