import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import PlusIcon from 'icons/Plus';
import DeleteIcon from 'icons/Delete';
import PropTypes from 'prop-types';
import styles from './styles';
import { PixelRatio } from 'constants/size';

export default class PictureBox extends Component {
  empty = () => {
    const emptyStyle = [
      styles.emptyBox,
      this.props.isFocus ? styles.focusBox : styles.grayBox];

    const labelStyle = [
      styles.label, 
      { fontSize: this.props.fontSize * PixelRatio },
      this.props.isFocus ? styles.focusLabel : styles.grayLabel];

    return (
      <Button onPress={(this.props.onPress)} style={styles.emptyButton}>
        <View style={emptyStyle}>
          <View style={styles.inner}>
            <PlusIcon type={this.props.type} />
          </View>
          <Label 
            style={labelStyle} 
            text={this.props.label} 
          />
        </View>
      </Button>
    );
  }

  picture = () => {
    const pictureStyle = [
      styles.pictureBox,
      this.props.isFocus ? styles.focusBox : styles.grayBox];

    return (
      <View>
        <View style={pictureStyle}>
          <Image 
            style={styles.picture} 
            source={this.props.picture} 
          />
        </View>
        <Button onPress={this.props.onDelete} style={styles.deleteButton}>
          <DeleteIcon />
        </Button>
      </View>
    );
  }

  render = () => {
    const boxStyle = 
      [
        this.props.style, 
        styles.box, 
        { width: this.props.width * PixelRatio, height: this.props.height * PixelRatio }];

    return (
      <View style={boxStyle}>
        {
          this.props.picture !== null ? this.picture() : this.empty()
        }
      </View>
    );
  };
}

PictureBox.defaultProps = {
  label: '사진등록',
  isFocus: true,
  width: 245,
  height: 245,
  fontSize: 15.6,
  picture: null,
  onPress: () => {},
  onDelete: () => {},
};

PictureBox.propTypes = {
  label: PropTypes.string,
  isFocus: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  picture: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }), 
    PropTypes.number]),
  onPress: PropTypes.func,
  onDelete: PropTypes.func,
};
