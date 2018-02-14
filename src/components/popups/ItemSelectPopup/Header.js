import React, { Component } from 'react';
import { View } from 'react-native';
import TitleLabel from 'atoms/TitleLabel';
import SubTitleLabel from 'atoms/SubTitleLabel';
import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TitleLabel style={styles.titleLabel} text={this.props.text} />
        <SubTitleLabel style={styles.subTitleLabel} text={this.props.subText} />
      </View>
    );
  }
}
