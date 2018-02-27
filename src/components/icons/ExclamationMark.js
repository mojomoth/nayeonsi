import React, { Component } from 'react';
import { Image } from 'react-native';

export default class ExclamationMark extends Component {
  render = () => <Image style={this.props.style} source={require('assets/images/icHelp.png')} />;
}
