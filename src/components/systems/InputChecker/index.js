import React, { Component } from 'react';
import { View } from 'react-native';
import InputWrapper from 'atoms/InputWrapper';
import TextInput from 'atoms/TextInput';
import AlarmLabel from 'atoms/AlarmLabel';
import CheckListIcon from 'icons/CheckList';
import PropTypes from 'prop-types';
import styles from './styles';

export default class InputChecker extends Component {
  render() {
    return (
      <View style={[styles.inputChecker, this.props.style]}>
        <InputWrapper style={styles.inputWrapper}>
          <TextInput 
            style={styles.textInput} 
            placeholder={this.props.label} 
            text={this.props.text} 
          />
          <CheckListIcon />
        </InputWrapper>

        <AlarmLabel text={this.props.alarm} style={styles.alarmLabel} />
      </View>
    );
  }
}

InputChecker.defaultProps = {
  label: '',
  alarm: '',
  text: '',
};

InputChecker.propTypes = {
  label: PropTypes.string,
  alarm: PropTypes.string,
  text: PropTypes.string,
};
