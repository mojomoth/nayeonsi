import React, { Component } from 'react';
import Button from 'atoms/Button';
import PointIcon from 'icons/Point';
import Label from 'atoms/Label';
import styles from './styles';

export default class Point extends Component {
  render = () => (
    <Button style={styles.pointBox} onPress={this.props.onPress}>
      <Label style={styles.pointLabel} text={this.props.point} />
      <PointIcon style={styles.pointIcon} />
    </Button>
  );
}
