import React, { Component } from 'react';
import { View } from 'react-native';
import ContentHeader from './ContentHeader';
import PictureBox from 'systems/PictureBox';
import styles from './styles';

const BIG_SIZE = 245;
const SMALL_SIZE = 116;
const BIG_FONT_SIZE = 15.6;
const SMALL_FONT_SIZE = 13.2;

export default class Content extends Component {
  mainPicture = () => (
    <PictureBox 
      style={styles.pictureBox} 
      width={BIG_SIZE} 
      height={BIG_SIZE} 
      fontSize={BIG_FONT_SIZE} 
      type={0}
    />
  );

  subPicture = () => (
    <PictureBox 
      style={styles.pictureBox} 
      width={SMALL_SIZE} 
      height={SMALL_SIZE} 
      fontSize={SMALL_FONT_SIZE} 
      type={1}
    />
  );

  render() {
    return (
      <View style={styles.content}>
        <ContentHeader contentHeader={this.props.contentHeader} />
        <View style={styles.boxes}>
          {this.mainPicture()}

          <View style={styles.smallBoxes1}>
            {this.subPicture()}
            {this.subPicture()}
          </View>

          <View style={styles.smallBoxes2}>
            {this.subPicture()}
            {this.subPicture()}
            {this.subPicture()}
          </View>
        </View>
      </View>
    );
  }
}
