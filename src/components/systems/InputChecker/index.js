import React, { Component } from 'react';
import { View } from 'react-native';
import InputWrapper from 'atoms/InputWrapper';
import TextInput from 'atoms/TextInput';
import AlarmLabel from 'atoms/AlarmLabel';
import Button from 'atoms/Button';
import CheckListIcon from 'icons/CheckList';
import PropTypes from 'prop-types';
import styles from './styles';

export default class InputChecker extends Component {
  render = () => (
    <View style={[styles.inputChecker, this.props.style]}>
      <InputWrapper style={styles.inputWrapper} focus={this.props.isFocus}>
        { this.props.isButton ? 
          <Button style={styles.button} onPress={this.props.onPress}>
            <TextInput 
              style={styles.textInput} 
              placeholder={this.props.label} 
              value={this.props.text} 
              editable
              onChangeText={this.props.onChangeText}
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur}
            />
          </Button> 
          : 
          <TextInput 
            style={styles.textInput} 
            placeholder={this.props.label} 
            value={this.props.text} 
            editable
            onChangeText={this.props.onChangeText}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
          />
        }
        { this.props.isComplete ? <CheckListIcon /> : null }
      </InputWrapper>

      { this.props.isAlarm ? 
        <AlarmLabel text={this.props.alarm} style={styles.alarmLabel} /> 
      : null }
    </View>
  );
}

InputChecker.defaultProps = {
  label: '',
  alarm: '',
  text: '',
  isAlarm: false,
  isComplete: false,
  isFocus: false,
  isButton: false,
  onPress: () => {},
  onChangeText: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

InputChecker.propTypes = {
  label: PropTypes.string,
  alarm: PropTypes.string,
  text: PropTypes.string,
  isAlarm: PropTypes.bool,
  isComplete: PropTypes.bool,
  isFocus: PropTypes.bool,
  isButton: PropTypes.bool,
  onPress: PropTypes.func,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
