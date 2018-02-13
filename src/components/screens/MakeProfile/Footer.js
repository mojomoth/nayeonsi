import React, { Component } from 'react';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import styles from './styles';

export default class Content extends Component {
  render() {
    return (
      <FilledButton style={styles.loginButton} onPress={this.props.onLogin}>
        <FilledButtonLabel style={styles.loginButtonLabel}>
          {this.props.buttonLabel}
        </FilledButtonLabel>
      </FilledButton>
    );
  }
}
