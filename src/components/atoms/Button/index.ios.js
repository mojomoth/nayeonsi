import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';
import { PixelRatio } from 'constants/size';

export default function Button(props) {
  return (
    <TouchableHighlight 
      style={props.style} 
      onPress={props.onPress}
    >
      <View style={[
        props.style,
        { 
          width: props.width * PixelRatio, 
          height: props.height * PixelRatio,
          alignItems: 'center',
          justifyContent: 'center',
        }]}
      >
        {props.children}
      </View>
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
