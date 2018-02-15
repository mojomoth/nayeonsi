import React, { Component } from 'react';
import { View } from 'react-native';
import InputChecker from 'systems/InputChecker';
import styles from './styles';

export default class Content extends Component {
  render = () => (
    <View style={styles.content}>
      <InputChecker 
        label="닉네임" 
        text={this.props.nickname.text}
        alarm={this.props.nickname.alarm}
        onBlur={this.props.nickname.onBlur} 
        onFocus={this.props.nickname.onFocus} 
        onChangeText={this.props.nickname.onChangeText} 
        onPress={this.props.nickname.onPress} 
        isAlarm={this.props.nickname.isAlarm}
        isComplete={this.props.nickname.isComplete}
        isFocus={this.props.nickname.isFocus}
        isButton={false}
      />
      <InputChecker 
        label="태어난연도" 
        text={this.props.year.text}
        alarm={this.props.year.alarm}
        onBlur={this.props.year.onBlur} 
        onFocus={this.props.year.onFocus} 
        onChangeText={this.props.year.onChangeText} 
        onPress={this.props.year.onPress} 
        isAlarm={this.props.year.isAlarm}
        isComplete={this.props.year.isComplete}
        isFocus={this.props.year.isFocus}
        isButton
      />
      <InputChecker 
        label="성별"
        text={this.props.sex.text}
        alarm={this.props.sex.alarm}
        onBlur={this.props.sex.onBlur} 
        onFocus={this.props.sex.onFocus} 
        onChangeText={this.props.sex.onChangeText} 
        onPress={this.props.sex.onPress} 
        isAlarm={this.props.sex.isAlarm}
        isComplete={this.props.sex.isComplete}
        isFocus={this.props.sex.isFocus}
        isButton
      />
      <InputChecker 
        label="키"
        text={this.props.tall.text}
        alarm={this.props.tall.alarm}
        onBlur={this.props.tall.onBlur} 
        onFocus={this.props.tall.onFocus} 
        onChangeText={this.props.tall.onChangeText} 
        onPress={this.props.tall.onPress} 
        isAlarm={this.props.tall.isAlarm}
        isComplete={this.props.tall.isComplete}
        isFocus={this.props.tall.isFocus}
        isButton
      />
      <InputChecker 
        label="체형"
        text={this.props.shape.text}
        alarm={this.props.shape.alarm}
        onBlur={this.props.shape.onBlur} 
        onFocus={this.props.shape.onFocus} 
        onChangeText={this.props.shape.onChangeText} 
        onPress={this.props.shape.onPress} 
        isAlarm={this.props.shape.isAlarm}
        isComplete={this.props.shape.isComplete}
        isFocus={this.props.shape.isFocus}
        isButton
      />
      <InputChecker 
        label="혈액형"
        text={this.props.blood.text}
        alarm={this.props.blood.alarm}
        onBlur={this.props.blood.onBlur} 
        onFocus={this.props.blood.onFocus} 
        onChangeText={this.props.blood.onChangeText} 
        onPress={this.props.blood.onPress} 
        isAlarm={this.props.blood.isAlarm}
        isComplete={this.props.blood.isComplete}
        isFocus={this.props.blood.isFocus}
        isButton
      />
      <InputChecker 
        label="종교"
        text={this.props.religion.text}
        alarm={this.props.religion.alarm}
        onBlur={this.props.religion.onBlur} 
        onFocus={this.props.religion.onFocus} 
        onChangeText={this.props.religion.onChangeText} 
        onPress={this.props.religion.onPress} 
        isAlarm={this.props.religion.isAlarm}
        isComplete={this.props.religion.isComplete}
        isFocus={this.props.religion.isFocus}
        isButton
      />
      <InputChecker 
        label="흡연"
        text={this.props.smoke.text}
        alarm={this.props.smoke.alarm}
        onBlur={this.props.smoke.onBlur} 
        onFocus={this.props.smoke.onFocus} 
        onChangeText={this.props.smoke.onChangeText} 
        onPress={this.props.smoke.onPress} 
        isAlarm={this.props.smoke.isAlarm}
        isComplete={this.props.smoke.isComplete}
        isFocus={this.props.smoke.isFocus}
        isButton
      />
      <InputChecker 
        label="음주"
        text={this.props.drink.text}
        alarm={this.props.drink.alarm}
        onBlur={this.props.drink.onBlur} 
        onFocus={this.props.drink.onFocus} 
        onChangeText={this.props.drink.onChangeText} 
        onPress={this.props.drink.onPress} 
        isAlarm={this.props.drink.isAlarm}
        isComplete={this.props.drink.isComplete}
        isFocus={this.props.drink.isFocus}
        isButton
      />
      <InputChecker 
        label="전화번호"
        text={this.props.phone.text}
        alarm={this.props.phone.alarm}
        onBlur={this.props.phone.onBlur} 
        onFocus={this.props.phone.onFocus} 
        onChangeText={this.props.phone.onChangeText} 
        onPress={this.props.phone.onPress} 
        isAlarm={this.props.phone.isAlarm}
        isComplete={this.props.phone.isComplete}
        isFocus={this.props.phone.isFocus}
        isButton={false}
        keyboardType={'phone-pad'}
      />
    </View>
  );
}

const defaultValues = {
  text: '',
  alarm: '1',
  onBlur: () => {},
  onFocus: () => {},
  onChangeText: () => {},
  onPress: () => {},
  isAlarm: false,
  isFocus: false,
  isComplete: false,
};

Content.defaultProps = {
  nickname: defaultValues,
  year: defaultValues,
  sex: defaultValues,
  tall: defaultValues,
  shape: defaultValues,
  blood: defaultValues,
  religion: defaultValues,
  smoke: defaultValues,
  drink: defaultValues,
  phone: defaultValues,
};

