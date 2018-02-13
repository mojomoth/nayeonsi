import React, { Component } from 'react';
import { Image } from 'react-native';

const Gray = require('assets/images/icBack.png');
const White = require('assets/images/icBackWhite.png');

export default class Back extends Component {
  render = () => {
    let source;

    if (this.props.type === 'white') {
      source = White;
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
