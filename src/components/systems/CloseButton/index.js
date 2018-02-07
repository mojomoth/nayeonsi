import React, { Component } from 'react';
import Button from 'atoms/Button';
import CloseIcon from 'icons/Close';
import styles from './styles';

export default class CloseButton extends Component {
  render() {
    return (
      <Button onPress={this.props.onBack} style={styles.closeButton}>
        <CloseIcon />
      </Button>
    );
  }
}
