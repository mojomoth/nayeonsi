import React, { Component } from 'react';
import { View } from 'react-native';
import TextInput from 'atoms/TextInput';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import PropTypes from 'prop-types';
import styles from './styles';

export default class InputBox extends Component {
  render = () => (
    <View style={styles.inputBox}>
      <TextInput 
        style={styles.textInput} 
        placeholder={this.props.label} 
        text={this.props.text} 
        multiline={true}
      />
      <Button onPress={this.props.onPress}>
        <View style={this.props.inputArea}>
          <Label style={styles.buttonLabel} text={'전송'} />
        </View>
      </Button>
    </View>
  );
}

InputBox.defaultProps = {
  label: '매너있는 대화가 썸의 성공',
  text: '가나다라마바사 아자차카 가나바다가가나다라마바사 아자차카 가나바다가가나다라마바사 아자차카 가나바다가가나다라마바사 아자차카 가나바다가',
  onPress: () => {},
};

InputBox.propTypes = {
  label: PropTypes.string, 
  text: PropTypes.string,
  onPress: PropTypes.func,
};
