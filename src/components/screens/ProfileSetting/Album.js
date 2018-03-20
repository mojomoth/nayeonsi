import React, { Component } from 'react';
import { View } from 'react-native';
import PictureBox from 'systems/PictureBox';
import styles from './styles';

const BIG_SIZE = 245;
const SMALL_SIZE = 116;
const BIG_FONT_SIZE = 15.6;
const SMALL_FONT_SIZE = 13.2;

export default class Album extends Component {
  mainPicture = (isFocus, label, picture, onPress, onDelete) => (
    <PictureBox 
      style={styles.pictureBox} 
      width={BIG_SIZE} 
      height={BIG_SIZE} 
      fontSize={BIG_FONT_SIZE} 
      type={0}
      label={label}
      picture={picture}
      isFocus={isFocus}
      onPress={onPress}
      onDelete={onDelete}
    />
  );

  subPicture = (isFocus, label, picture, onPress, onDelete) => (
    <PictureBox 
      style={styles.pictureBox} 
      width={SMALL_SIZE} 
      height={SMALL_SIZE} 
      fontSize={SMALL_FONT_SIZE} 
      type={isFocus ? 1 : 2}
      label={label}
      picture={picture}
      isFocus={isFocus}
      onPress={onPress}
      onDelete={onDelete}
    />
  );

  render = () => (
    <View style={styles.album}>
      <View style={styles.boxes}>
        {this.mainPicture(true, '대표사진', this.props.picture1, this.props.onPress1, this.props.onDelete1)}

        <View style={styles.smallBoxes1}>
          {this.subPicture(true, '필수', this.props.picture2, this.props.onPress2, this.props.onDelete2)}
          {this.subPicture(true, '필수', this.props.picture3, this.props.onPress3, this.props.onDelete3)}
        </View>
      </View>
      <View style={styles.boxes}>
        <View style={styles.smallBoxes2}>
          {this.subPicture(false, '', this.props.picture4, this.props.onPress4, this.props.onDelete4)}
          {this.subPicture(false, '', this.props.picture5, this.props.onPress5, this.props.onDelete5)}
          {this.subPicture(false, '', this.props.picture6, this.props.onPress6, this.props.onDelete6)}
        </View>
      </View>
    </View>
  );
}
