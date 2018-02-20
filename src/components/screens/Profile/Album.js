import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

export default class Album extends Component {
  images = (datas) => {
    const elements = [];
    let key = 0;
    for (const data of datas) {
      elements.push((
        <Image key={key} style={styles.image} source={{ uri: data }} />
      ));

      key += 1;
    }

    return elements;
  };

  render = () => (
    <Swiper 
      style={styles.album} 
      dotStyle={styles.albumDot}
      activeDotStyle={styles.albumActiveDot}
      showsButtons={false}
    >
      { this.images(this.props.images) }
    </Swiper>
  );
}
