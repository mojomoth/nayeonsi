
import React, { Component } from 'react';
import Screen from 'atoms/Screen';
import Logo from 'atoms/Logo';
import styles from './styles';

export default class Landing extends Component {
  render = () => (
    <Screen style={styles.screen}>
      <Logo />
    </Screen>
  );
}
