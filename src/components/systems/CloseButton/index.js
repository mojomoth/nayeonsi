import React, { Component } from 'react';
import Button from 'atoms/Button';
import CloseIcon from 'icons/Close';
import styles from './styles';

export default class CloseButton extends Component {
  render = () => (
    <Button 
      width={this.props.width} 
      height={this.props.height} 
      onPress={this.props.onPress}
      style={[styles.closeButton, this.props.style]}
    >
      <CloseIcon />
    </Button>
  );
}
