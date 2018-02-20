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
        <Album 
          images={this.props.images}
        />
        <FloatingHeader 
          onBack={this.props.onBack}
          onMore={this.props.onMore}
        />
        <Info 
          name={this.props.name}
          info1={this.props.info1}
          info2={this.props.info2}
          isNearby={this.props.isNearby}
          isTop={this.props.isTop}
          onPress={this.props.onPress}
        />
        <About 
          message={this.props.message}
          tall={this.props.tall}
          shape={this.props.shape}
          job={this.props.job}
          school={this.props.school}
          religion={this.props.religion}
          drink={this.props.drink}
          smoke={this.props.smoke}
          blood={this.props.blood}
        />
        <Appeal
          data1={this.props.data1}
          data2={this.props.data2}
          data3={this.props.data3}
          data4={this.props.data4}
          data5={this.props.data5}
        />
      </ScrollView>
    </Screen>
  );
}
