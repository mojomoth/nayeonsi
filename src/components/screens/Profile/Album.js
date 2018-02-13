import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

const s = {
  wrapper: {
    height: 400,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};


export default class Album extends Component {
  render = () => (
    <Swiper 
      style={styles.album} 
      dotStyle={styles.albumDot}
      activeDotStyle={styles.albumActiveDot}
      showsButtons={false}
    >
      <View style={s.slide1}>
        <Text style={s.text}>Hello Swiper</Text>
      </View>
      <View style={s.slide2}>
        <Text style={s.text}>Beautiful</Text>
      </View>
      <View style={s.slide3}>
        <Text style={s.text}>And simple</Text>
      </View>
    </Swiper>
  );
}
