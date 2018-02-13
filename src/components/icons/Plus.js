import React, { Component } from 'react';
import { Image } from 'react-native';

const BigRed = require('assets/images/joinIcAddPhotoBic.png');
const SmallRed = require('assets/images/joinIcAddPhotoSmallRed.png');
const SmallGray = require('assets/images/joinIcAddPhotoSmallGray.png');
const MidRed = require('assets/images/icAddMaching.png');

export default class Plus extends Component {
  render = () => {
    let source;

    if (this.props.type === 1) {
      source = SmallRed;
    } else if (this.props.type === 2) {
      source = SmallGray;
    } else if (this.props.type === 3) {
      source = MidRed;
    } else {
      source = BigRed;
    } 

    return (
      <Image 
        style={this.props.style} 
        source={source} 
      />
    );
  };
}
