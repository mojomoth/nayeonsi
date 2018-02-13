import React, { Component } from 'react';
import { View } from 'react-native';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import OutlineButton from 'atoms/OutlineButton';
import OutlineButtonLabel from 'atoms/OutlineButtonLabel';
import PointButtonLabel from './PointButtonLabel';
import Label from 'atoms/Label';
import styles from './styles';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <FilledButton 
          style={styles.button} 
          onPress={this.props.onSceret}
          enabled={this.props.enabledSecret}
        >
          <FilledButtonLabel>{this.props.secretButton}</FilledButtonLabel>
        </FilledButton>
        
        <Label style={styles.aboutSecret} text={this.props.aboutSecret} />

        <FilledButton 
          style={styles.button} 
          onPress={this.props.onAppeal}
          enabled={this.props.enabledAppeal}
        >
          <FilledButtonLabel>{this.props.appealButton}</FilledButtonLabel>
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
}
