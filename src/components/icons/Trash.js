import React, { Component } from 'react';
import { Image } from 'react-native';

const White = require('assets/images/icDimDel.png');
const Red = require('assets/images/icDelList.png');

export default class Trash extends Component {
  render = () => {
    let source;

    if (this.props.type === 'red') {
      source = Red;
    } else {
      source = White;
    } 

    return (
      <Image 
        style={this.props.style} 
        source={source} 
      />
    );
  };
}
