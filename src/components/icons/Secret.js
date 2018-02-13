import React, { Component } from 'react';
import { Image } from 'react-native';

const Big = require('assets/images/btnIcSecret.png');
const Mid = require('assets/images/badgeIcSecret.png');
const Small = require('assets/images/badgeIcSecretList.png');

export default class Secret extends Component {
  render = () => {
    let source;

    if (this.props.type === 'big') {
      source = Big;
    } else if (this.props.type === 'small') {
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
