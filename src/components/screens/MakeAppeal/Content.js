import React, { Component } from 'react';
import { View } from 'react-native';
import InputChecker from 'systems/InputChecker';
import styles from './styles';

export default class Content extends Component {
  render() {
    return (
      <View style={styles.content}>
        <InputChecker label="위치" />
        <InputChecker label="학교/학과" />
        <InputChecker label="직업" />
        <InputChecker label="매력포인트" />
        <InputChecker label="성격" />
        <InputChecker label="관심사" />
        <InputChecker label="이상형" />
        <InputChecker label="데이트 스타일" />
        <InputChecker label="자신에 대해 간단소개 해주세요." />
      </View>
    );
  }
}
