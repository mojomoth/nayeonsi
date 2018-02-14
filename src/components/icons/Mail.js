import React, { Component } from 'react';
import { Image } from 'react-native';

const Gray = require('assets/images/icIdNor.png');
const Red = require('assets/images/icIdPre.png');

export default class Mail extends Component {
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
