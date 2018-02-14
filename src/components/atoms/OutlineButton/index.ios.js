import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight } from 'react-native';
import { 
  COLOR,
  DISABLED_COLOR,
} from 'constants/color';
import styles from 'atoms/styles';

export default function OutlineButton(props) {
  const buttonStyle = {
    width: props.width,
    height: props.height,
    borderRadius: props.height * 0.5,
    borderColor: props.enabled ? props.color : props.disabledColor,
  };
  
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View
        style={[styles.outlineButton, buttonStyle, props.style]}
      >
        {props.children}
      </View>
    </TouchableHighlight>
  );
}

OutlineButton.defaultProps = {
  width: null,
  height: 45.3,
  color: COLOR,
  disabledColor: DISABLED_COLOR,
  children: null,
  enabled: true,
  onPress: () => {},
};

OutlineButton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  disabledColor: PropTypes.string,
  children: PropTypes.node,
  enabled: PropTypes.bool,
  onPress: PropTypes.func,
};
