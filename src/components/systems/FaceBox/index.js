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
        resizeMethod="resize"
        source={this.props.source}
      />
    );
  };
}

FaceBox.defaultProps = {
  size: 80,
  source: null,
};

FaceBox.propTypes = {
  size: PropTypes.number,
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }), 
    PropTypes.number]),
};

