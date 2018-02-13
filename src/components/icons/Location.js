import React, { Component } from 'react';
import { Image } from 'react-native';

const Mid = require('assets/images/badgeIcLocation.png');
const Small = require('assets/images/badgeIcLocationList.png');

export default class Location extends Component {
  render = () => {
    let source;

    if (this.props.type === 'small') {
      source = Small;
    } else {
      source = Mid;
    } 

    return (
      <Image 
        style={this.props.style} 
        source={source} 
      />
    );
  };
}
