import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Shop extends Component {
  render = () => <Image style={this.props.style} source={require('assets/images/myIcStore.png')} />;
}
