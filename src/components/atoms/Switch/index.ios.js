import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';
import Button from './Button';

export default function Switch(props) {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <Button 
        enabled={props.enabled} 
      />
    </TouchableHighlight>
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
