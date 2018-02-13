import React, { Component } from 'react';
import { Image } from 'react-native';

export default class CloseAlarm extends Component {
  render = () => <Image style={this.props.style} source={require('assets/images/icCloseNotiPop.png')} />;
}
