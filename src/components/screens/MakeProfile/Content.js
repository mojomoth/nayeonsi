import React, { Component } from 'react';
import { View } from 'react-native';
import InputChecker from 'systems/InputChecker';
import styles from './styles';

export default class Content extends Component {
  render() {
    return (
      <View style={styles.content}>
        <InputChecker label="닉네임" />
        <InputChecker label="태어난연도" />
        <InputChecker label="성별" />
        <InputChecker label="키" />
        <InputChecker label="체형" />
        <InputChecker label="혈액형" />
        <InputChecker label="종교" />
        <InputChecker label="흡연" />
        <InputChecker label="음주" />
        <InputChecker label="전화번호" />
      </View>
    );
  }
}
