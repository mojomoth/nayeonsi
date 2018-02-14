import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback } from 'react-native';
import { 
  COLOR,
  DISABLED_COLOR,
} from 'constants/color';
import styles from 'atoms/styles';

export default function FilledButton(props) {
  const buttonStyle = {
    width: props.width,
    height: props.height,
    borderRadius: props.height * 0.5,
    backgroundColor: props.enabled ? props.color : props.disabledColor,
  };

  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={[styles.filledButton, buttonStyle, props.style]}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  );
}

FilledButton.defaultProps = {
  width: null,
  height: 45.3,
  color: COLOR,
  disabledColor: DISABLED_COLOR,
  children: null,
  enabled: true,
  onPress: () => {},
};

FilledButton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  disabledColor: PropTypes.string,
  children: PropTypes.node,
  enabled: PropTypes.bool,
  onPress: PropTypes.func,
};
