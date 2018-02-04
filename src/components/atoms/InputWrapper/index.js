import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'atoms/styles';
import { 
  COLOR,
  LINE_COLOR,
} from 'constants/color';

export default class InputWrapper extends Component {
  render = () => {
    const inputWrapperStyle = {
      borderColor: this.props.focus ? this.props.focusColor : this.props.color,
    };

    return (
      <View style={[styles.inputWrapper, inputWrapperStyle, this.props.style]}>
        {this.props.children}
      </View>
    );
  };
}

InputWrapper.defaultProps = {
  children: null,
  color: LINE_COLOR,
  focusColor: COLOR,
  focus: false,
};

InputWrapper.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  focusColor: PropTypes.string,
  focus: PropTypes.bool,
};
