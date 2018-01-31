import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';
import Button from './Button';
import { COLOR, DISABLED_COLOR } from 'atoms/styles';

export default function FilledButton(props) {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <Button 
        size={props.size} 
        color={props.color} 
        disabledColor={props.disabledColor} 
        enabled={props.enabled}
      >
        {props.children}
      </Button>
    </TouchableHighlight>
  );
}

Button.defaultProps = {
  size: 45.3,
  color: COLOR,
  disabledColor: DISABLED_COLOR,
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  disabledColor: PropTypes.string,
  children: PropTypes.node,
  onPress: PropTypes.func,
};
