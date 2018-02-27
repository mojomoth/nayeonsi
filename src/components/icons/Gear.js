import React, { Component } from 'react';
import { Image } from 'react-native';

const Gray = require('assets/images/icTabSetting.png');
const Red = require('assets/images/icTabSettingPre.png');
const WhiteSmall = require('assets/images/icSetting.png');

export default class Gear extends Component {
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
