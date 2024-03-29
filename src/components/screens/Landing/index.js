import React, { Component } from 'react';
import { Animated } from 'react-native';
import Screen from 'atoms/Screen';
import Logo from 'atoms/Logo';
import Loading from 'systems/Loading';
import styles from './styles';

export const ANIMATE_TIME = 2000;

export default class Landing extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  fade = (value, duration) => {
    Animated.timing(                 
      this.state.fadeAnim,           
      {
        toValue: value,                  
        duration,      
      },
    ).start();   
  };

  render = () => (
    <Screen style={styles.screen}>
      <Animated.View 
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,
        }}
      >
        <Logo ref={this.logo} />
      </Animated.View>
      { this.props.isLoading ? <Loading /> : null }
    </Screen>
  );
}
