import React, { Component } from 'react';
import { Image } from 'react-native';

const Gray = require('assets/images/icTabPlace.png');
const Red = require('assets/images/icTabPlacePre.png');

export default class Appeal extends Component {
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
