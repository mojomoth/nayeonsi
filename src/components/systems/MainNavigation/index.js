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
  changeMenu = (index) => {
    if (this.props.navigator === null || 
      this.props.navigator === undefined) {
      return false;
    }

    this.props.navigator.switchToTab({
      tabIndex: index,
    });

    return true;
  };

  render = () => (
    <View style={styles.navigation}>
      <Button onPress={() => this.changeMenu(0)}>
        <HomeIcon style={styles.homeIcon} type={this.props.menu === 1 ? 'red' : null} />
      </Button>

      <Button onPress={() => this.changeMenu(1)}>
        <PersonIcon style={styles.personIcon} type={this.props.menu === 2 ? 'red' : null} />
      </Button>

      <Button onPress={() => this.changeMenu(2)}>
        <AppealIcon style={styles.appealIcon} type={this.props.menu === 3 ? 'red' : null} />
      </Button>

      <Button onPress={() => this.changeMenu(3)}>
        <ChatIcon style={styles.chatIcon} type={this.props.menu === 4 ? 'red' : null} />
      </Button>

      <Button onPress={() => this.changeMenu(4)}>
        <GearIcon style={styles.gearIcon} type={this.props.menu === 5 ? 'red' : null} />
      </Button>
    </View>
  );  
}
