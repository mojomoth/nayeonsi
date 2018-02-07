import React, { Component } from 'react';
import { View } from 'react-native';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import OutlineButton from 'atoms/OutlineButton';
import OutlineButtonLabel from 'atoms/OutlineButtonLabel';
import styles from './styles';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <FilledButton 
          style={styles.button} 
          onPress={this.props.onConfirm}
          enabled={this.props.enabledConfirm}
        >
          <FilledButtonLabel>{this.props.confirmButton}</FilledButtonLabel>
        </FilledButton>

        <OutlineButton 
          style={styles.button} 
          onPress={this.props.onCancel}
          enabled={this.props.enabledCancel}
        >
          <OutlineButtonLabel>{this.props.cancelButton}</OutlineButtonLabel>
        </OutlineButton>
      </View>
    );
  }
}
