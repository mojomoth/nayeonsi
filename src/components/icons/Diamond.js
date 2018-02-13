import React, { Component } from 'react';
import { Image } from 'react-native';

const Gray = require('assets/images/icPay.png');
const Point = require('assets/images/icPointList01.png');

export default class Diamond extends Component {
  render = () => {
    let source;

    if (this.props.type === 'pay') {
      source = Gray;
    } else {
      source = Point;
    } 

    return (
      <Image 
        style={this.props.style} 
        source={source} 
      />
    );
  };
}
