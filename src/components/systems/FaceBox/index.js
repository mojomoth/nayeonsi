import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { PixelRatio } from 'constants/size';

export default class FaceBox extends Component {
  render = () => {
    const styles = {
      width: this.props.size * PixelRatio,
      height: this.props.size * PixelRatio,
      borderRadius: (this.props.size * PixelRatio) / 2,
    };

    return (
      <Image 
        style={[styles, this.props.style]}
        resizeMode="cover"
        source={{ uri: this.props.uri }}
      />
    );
  };
}

FaceBox.defaultProps = {
  size: 80,
  uri: 'https://s-media-cache-ak0.pinimg.com/736x/43/cd/6e/43cd6e82491bf130d97624c198ee1a3f--funny-movie-quotes-funny-movies.jpg',
};

FaceBox.propTypes = {
  size: PropTypes.number,
  uri: PropTypes.string,
};

