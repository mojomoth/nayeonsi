import React, { Component } from 'react';
import Label from 'atoms/Label';
import styles from './styles';

export default class AppealType extends Component {
  render = () => (
    <Label style={styles.appealType} text={this.props.text} />
  );
}
