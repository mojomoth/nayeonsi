import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import toggleOn from 'assets/images/togleOn.png';
import toggleOff from 'assets/images/togleOff.png';

export default class Switch extends Component {
  render = () => <Image source={this.props.enabled ? toggleOn : toggleOff} />;
}

Switch.defaultProps = {
  enabled: true,
};

Switch.propTypes = {
  enabled: PropTypes.bool,
};

