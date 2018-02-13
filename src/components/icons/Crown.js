import React, { Component } from 'react';
import { Image } from 'react-native';

const Mid = require('assets/images/badgeIcPremium.png');
const Small = require('assets/images/badgeIcPremiumList.png');

export default class Crown extends Component {
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
