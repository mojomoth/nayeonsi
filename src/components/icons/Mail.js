import React, { Component } from 'react';
import { Image } from 'react-native';

const Gray = require('assets/images/icIdNor.png');
const Red = require('assets/images/icIdPre.png');
const WhiteSmall = require('assets/images/myIcSend.png');

export default class Mail extends Component {
  render = () => {
    let source;

    if (this.props.type === 'red') {
      source = Red;
    } else if (this.props.type === 'whitesmall') {
      source = WhiteSmall;
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
