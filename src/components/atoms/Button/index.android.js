import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';

export default function Button(props) {
  return (
    <TouchableNativeFeedback 
      style={props.style} 
      onPress={props.onPress}
    >
      {props.children}
    </TouchableNativeFeedback>
  );
}

Button.defaultProps = {
  style: null,
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  style: PropTypes.node,
  children: PropTypes.node,
  onPress: PropTypes.func,
};
