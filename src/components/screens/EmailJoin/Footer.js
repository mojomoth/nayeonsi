import React, { Component } from 'react';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import styles from './styles';

export default class Content extends Component {
  render = () => (
    <FilledButton style={styles.loginButton} onPress={this.props.onPress}>
      <FilledButtonLabel style={styles.loginButtonLabel}>
        {this.props.buttonLabel}
      </FilledButtonLabel>
    </FilledButton>
  );
}
