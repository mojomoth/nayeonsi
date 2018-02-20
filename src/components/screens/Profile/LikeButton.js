import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import HeartIcon from 'icons/Heart';
import styles from './styles';

export default class LikeButton extends Component {
  render = () => (
    <Button onPress={this.props.onPress} style={styles.likeButton}>
      <HeartIcon type="mid" style={styles.likeIcon} />
      <Label style={styles.likeButtonLabel} text={'좋아요'} />
    </Button>
  );
}
