import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Label from 'atoms/Label';
import styles from './styles';

const image = require('assets/images/joinIcComplete.png');

export default class Content extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <Label text={this.props.resultText} style={styles.resultLabel} />
      </View>
    );
  }
}
