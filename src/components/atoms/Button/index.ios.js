import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function Button(props) {
  return (
    <TouchableHighlight 
      style={props.style} 
      onPress={props.onPress}
    >
      {props.children}
    </TouchableHighlight>
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
