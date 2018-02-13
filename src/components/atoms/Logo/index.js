import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Logo extends Component {
  render = () => <Image style={this.props.style} source={require('assets/images/logo.png')} />;
}
