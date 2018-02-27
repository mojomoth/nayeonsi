import React, { Component } from 'react';
import { Image } from 'react-native';

const Red = require('assets/images/icAlarmPushOn.png');
const Gay = require('assets/images/icAlarmPushOff.png');

export default class LocationCircle extends Component {
  render = () => {
    let source;

    if (this.props.type === 'red') {
      source = Red;
    } else {
      source = Gay;
    } 

    return (
      <Image 
        style={this.props.style} 
        source={source} 
      />
    );
  };
}
