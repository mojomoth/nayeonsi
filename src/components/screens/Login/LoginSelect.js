
import React, { Component } from 'react';
import { View } from 'react-native';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import OutlineButton from 'atoms/OutlineButton';
import OutlineButtonLabel from 'atoms/OutlineButtonLabel';
import styles from './styles';

export default class LoginSelect extends Component {
  render = () => (
    <View style={styles.loginSelect}>
      <OutlineButton style={styles.emailButton} onPress={this.props.onJoin}>
        <OutlineButtonLabel style={styles.emailButtonLabel}>
          {this.props.emailButton}
        </OutlineButtonLabel>
      </OutlineButton>

      <OutlineButton style={styles.facebookButton} onPress={this.props.onFacebook}>
        <OutlineButtonLabel style={styles.facebookButtonLabel}>
          {this.props.facebookButton}
        </OutlineButtonLabel>
      </OutlineButton>

      <FilledButton style={styles.loginButton} onPress={this.props.onLogin}>
        <FilledButtonLabel style={styles.loginButtonLabel}>
          {this.props.loginButton}
        </FilledButtonLabel>
      </FilledButton>
    </View>
  );
}
