import React, { Component } from 'react';
import { Image } from 'react-native';

import toggleOn from 'assets/images/togleOn.png';
import toggleOff from 'assets/images/togleOff.png';

export default class Button extends Component {
  render = () => <Image source={this.props.enabled ? toggleOn : toggleOff} />;
}
