import React, { Component } from 'react';
import { Image } from 'react-native';

const Filled = require('assets/images/icLikePre.png');
const Mid = require('assets/images/icLikeNor.png');
const Small = require('assets/images/btnIcLike02.png');
const MidGray = require('assets/images/icLikeTopNor.png');

export default class Heart extends Component {
  render = () => {
    let source;

    if (this.props.type === 'small') {
      source = Small;
    } else if (this.props.type === 'mid') {
      source = Mid;
    } else if (this.props.type === 'mid-gray') {
      source = MidGray;
    } else {
      source = Filled;
    } 

    return (
      <Image 
        style={this.props.style} 
        source={source} 
      />
    );
  };
}
