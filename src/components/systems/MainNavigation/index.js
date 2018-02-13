import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'atoms/Button';
import HomeIcon from 'icons/Home';
import PersonIcon from 'icons/Person';
import AppealIcon from 'icons/Appeal';
import ChatIcon from 'icons/Chat';
import GearIcon from 'icons/Gear';
import styles from './styles';

export default class MainNavigation extends Component {
  render = () => (
    <View style={styles.navigation}>
      <Button onPress={this.props.onMain}>
        <HomeIcon />
      </Button>

      <Button onPress={this.props.onCard}>
        <PersonIcon />
      </Button>

      <Button onPress={this.props.onAppeal}>
        <AppealIcon />
      </Button>

      <Button onPress={this.props.onChat}>
        <ChatIcon />
      </Button>

      <Button onPress={this.props.onEtc}>
        <GearIcon />
      </Button>
    </View>
  );  
}
