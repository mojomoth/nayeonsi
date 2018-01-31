import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';
import Button from './Button';

export default function Switch(props) {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <Button enabled={props.enabled} />
    </TouchableNativeFeedback>
  );
}

Switch.defaultProps = {
  enabled: true,
  onPress: () => {},
};

Switch.propTypes = {
  enabled: PropTypes.bool,
  onPress: PropTypes.func,
};
