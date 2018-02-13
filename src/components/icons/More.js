import React, { Component } from 'react';
import { Image } from 'react-native';

const Gray = require('assets/images/icMenu.png');
const White = require('assets/images/icMenuWhite.png');

export default class More extends Component {
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
