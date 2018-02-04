import React, { Component } from 'react';
import { View } from 'react-native';
import TitleLabel from 'atoms/TitleLabel';
import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TitleLabel style={styles.titleLabel} text={this.props.text} />
      </View>
    );
  }
}
