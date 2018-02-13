import React, { Component } from 'react';
import { Image } from 'react-native';

const Gray = require('assets/images/icTabHome.png');
const Red = require('assets/images/icTabHomePre.png');

export default class Home extends Component {
  render = () => {
    let source;

    if (this.props.type === 'red') {
      source = Red;
    } else {
      source = Gray;
    } 

    return (
      <Image 
        style={this.props.style} 
        source={source} 
      />
    );
  };
}
