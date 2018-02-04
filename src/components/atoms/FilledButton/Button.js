import React, { Component } from 'react';
import { View } from 'react-native';
import styles from 'atoms/styles';

export default class Button extends Component {
  render = () => {
    const buttonStyle = {
      width: this.props.width,
      height: this.props.height,
      borderRadius: this.props.height * 0.5,
      backgroundColor: this.props.enabled ? this.props.color : this.props.disabledColor,
    };

    return (
      <View style={[styles.filledButton, buttonStyle, this.props.style]}>
        {this.props.children}
      </View>
    );
  };
}
