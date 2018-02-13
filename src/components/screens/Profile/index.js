import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Screen from 'atoms/Screen';
import Header from './Header';
import Album from './Album';
import FloatingHeader from './FloatingHeader';
import Info from './Info';
import About from './About';
import Appeal from './Appeal';
import styles from './styles';

export default class Profile extends Component {
  render = () => (
    <Screen style={styles.profile}>
      <ScrollView>
        <Album />
        <FloatingHeader />
        <Info 
          name={'헤더타이틀'}
          info1={'저는요'}
          info2={'직업'}
          isNearby={true}
          isTop={true}
        />
        <About 
          message={'헤더타이틀'}
          about={'저는요'}
          job={'직업'}
          school={'학교'}
          religion={'종교'}
          drink={'음주'}
          smoke={'흡연'}
          blood={'혈액형'}
        />
        <Appeal />
      </ScrollView>
    </Screen>
  );
}
