import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, View } from 'react-native';
import { PixelRatio } from 'constants/size';

export default function Button(props) {
  return (
    <TouchableNativeFeedback 
      onPress={props.onPress}
    >
      <View style={[
        { 
          width: props.width * PixelRatio, 
          height: props.height * PixelRatio,
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.style]}
      >
        {props.children}
      </View>
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
