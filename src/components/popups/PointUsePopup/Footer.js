import React, { Component } from 'react';
import { View } from 'react-native';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import OutlineButton from 'atoms/OutlineButton';
import OutlineButtonLabel from 'atoms/OutlineButtonLabel';
import PointButtonLabel from './PointButtonLabel';
import styles from './styles';

export default class Footer extends Component {
  render = () => (
    <View style={styles.footer}>
      <FilledButton 
        style={styles.button} 
        onPress={this.props.onConfirm}
        enabled={this.props.enabledConfirm}
      >
        <FilledButtonLabel>{this.props.confirmButton}</FilledButtonLabel>
        <PointButtonLabel point={this.props.point} />
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
