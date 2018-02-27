import React, { Component } from 'react';
import { Image } from 'react-native';

export default class ListArrow extends Component {
  render = () => <Image style={this.props.style} source={require('assets/images/listIcArrow01.png')} />;
}
