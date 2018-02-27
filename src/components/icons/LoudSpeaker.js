import React, { Component } from 'react';
import { Image } from 'react-native';

const WhiteSmall = require('assets/images/myIcNotice.png');
const Default = require('assets/images/mainIcNoti.png');

export default class LoudSpeaker extends Component {
  render = () => {
    let source;

    if (this.props.type === 'whitesmall') {
      source = WhiteSmall;
    } else {
      source = Default;
    } 

    return (
      <Image 
        style={this.props.style} 
        source={source} 
      />
    );
  };
}
