import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';
import Button from './Button';
import { 
  COLOR,
  DISABLED_COLOR,
} from 'constants/color';

export default function OutlineButton(props) {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <Button 
        width={props.width} 
        height={props.height} 
        color={props.color}
        disabledColor={props.disabledColor} 
        enabled={props.enabled}
        style={props.style}
      >
        {props.children}
      </Button>
    </TouchableNativeFeedback>
  );
}

Button.defaultProps = {
  width: null,
  height: 45.3,
  color: COLOR,
  disabledColor: DISABLED_COLOR,
  children: null,
  enabled: true,
  onPress: () => {},
};

Button.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  disabledColor: PropTypes.string,
  children: PropTypes.node,
  enabled: PropTypes.bool,
  onPress: PropTypes.func,
};
