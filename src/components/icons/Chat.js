import React, { Component } from 'react';
import { Image } from 'react-native';

const Gray = require('assets/images/icTabDm.png');
const Red = require('assets/images/icTabDmPre.png');

export default class Chat extends Component {
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
