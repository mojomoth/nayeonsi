import React, { Component } from 'react';
import { View } from 'react-native';
import InputChecker from 'systems/InputChecker';
import styles from './styles';

export default class Appeal extends Component {
  render = () => (
    <View style={[styles.content, styles.appeal]}>
      <InputChecker 
        label="위치" 
        text={this.props.location.text}
        alarm={this.props.location.alarm}
        onBlur={this.props.location.onBlur} 
        onFocus={this.props.location.onFocus} 
        onChangeText={this.props.location.onChangeText} 
        onPress={this.props.location.onPress} 
        isAlarm={this.props.location.isAlarm}
        isComplete={this.props.location.isComplete}
        isFocus={this.props.location.isFocus}
      />
      <InputChecker 
        label="학교/학과" 
        text={this.props.school.text}
        alarm={this.props.school.alarm}
        onBlur={this.props.school.onBlur} 
        onFocus={this.props.school.onFocus} 
        onChangeText={this.props.school.onChangeText} 
        onPress={this.props.school.onPress} 
        isAlarm={this.props.school.isAlarm}
        isComplete={this.props.school.isComplete}
        isFocus={this.props.school.isFocus}
      />
      <InputChecker 
        label="직업" 
        text={this.props.job.text}
        alarm={this.props.job.alarm}
        onBlur={this.props.job.onBlur} 
        onFocus={this.props.job.onFocus} 
        onChangeText={this.props.job.onChangeText} 
        onPress={this.props.job.onPress} 
        isAlarm={this.props.job.isAlarm}
        isComplete={this.props.job.isComplete}
        isFocus={this.props.job.isFocus}
      />
      <InputChecker 
        label="매력포인트" 
        text={this.props.attraction.text}
        alarm={this.props.attraction.alarm}
        onBlur={this.props.attraction.onBlur} 
        onFocus={this.props.attraction.onFocus} 
        onChangeText={this.props.attraction.onChangeText} 
        onPress={this.props.attraction.onPress} 
        isAlarm={this.props.attraction.isAlarm}
        isComplete={this.props.attraction.isComplete}
        isFocus={this.props.attraction.isFocus}
      />
      <InputChecker 
        label="성격" 
        text={this.props.character.text}
        alarm={this.props.character.alarm}
        onBlur={this.props.character.onBlur} 
        onFocus={this.props.character.onFocus} 
        onChangeText={this.props.character.onChangeText} 
        onPress={this.props.character.onPress} 
        isAlarm={this.props.character.isAlarm}
        isComplete={this.props.character.isComplete}
        isFocus={this.props.character.isFocus}
      />
      <InputChecker 
        label="관심사"
        text={this.props.like.text}
        alarm={this.props.like.alarm}
        onBlur={this.props.like.onBlur} 
        onFocus={this.props.like.onFocus} 
        onChangeText={this.props.like.onChangeText} 
        onPress={this.props.like.onPress} 
        isAlarm={this.props.like.isAlarm}
        isComplete={this.props.like.isComplete}
        isFocus={this.props.like.isFocus}
      />
      <InputChecker 
        label="이상형" 
        text={this.props.want.text}
        alarm={this.props.want.alarm}
        onBlur={this.props.want.onBlur} 
        onFocus={this.props.want.onFocus} 
        onChangeText={this.props.want.onChangeText} 
        onPress={this.props.want.onPress} 
        isAlarm={this.props.want.isAlarm}
        isComplete={this.props.want.isComplete}
        isFocus={this.props.want.isFocus}
      />
      <InputChecker 
        label="데이트 스타일" 
        text={this.props.play.text}
        alarm={this.props.play.alarm}
        onBlur={this.props.play.onBlur} 
        onFocus={this.props.play.onFocus} 
        onChangeText={this.props.play.onChangeText} 
        onPress={this.props.play.onPress} 
        isAlarm={this.props.play.isAlarm}
        isComplete={this.props.play.isComplete}
        isFocus={this.props.play.isFocus}
      />
      <InputChecker 
        label="자신에 대해 간단소개 해주세요." 
        text={this.props.message.text}
        alarm={this.props.message.alarm}
        onBlur={this.props.message.onBlur} 
        onFocus={this.props.message.onFocus} 
        onChangeText={this.props.message.onChangeText} 
        onPress={this.props.message.onPress} 
        isAlarm={this.props.message.isAlarm}
        isComplete={this.props.message.isComplete}
        isFocus={this.props.message.isFocus}
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

Appeal.defaultProps = {
  location: defaultValues,
  school: defaultValues,
  job: defaultValues,
  attraction: defaultValues,
  character: defaultValues,
  like: defaultValues,
  want: defaultValues,
  play: defaultValues,
  message: defaultValues,
};
