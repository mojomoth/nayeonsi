import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TitleLabel from 'atoms/TitleLabel';
import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.titleLabel}>
          <Text style={styles.nameLabel}>{this.props.name}</Text>
          {this.props.text}
        </Text>
      </View>
    );
  }
}
