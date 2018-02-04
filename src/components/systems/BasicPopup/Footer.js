import React, { Component } from 'react';
import { View } from 'react-native';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import styles from './styles';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <FilledButton 
          style={styles.button} 
          onPress={this.props.onPress}
          enabled={this.props.enabled}
        >
          <FilledButtonLabel>{this.props.buttonText}</FilledButtonLabel>
        </FilledButton>
      </View>
    );
  }
}
