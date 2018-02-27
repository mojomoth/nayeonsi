import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import ListArrow from 'icons/ListArrow';
import styles from './styles';

export default class Menu extends Component {
  render = () => (
    <Button style={styles.menuButton} onPress={this.props.onPress}>
      <View style={styles.menuLeft}>
        <View style={styles.menuRound}>
          {this.props.children}
        </View>
        <Label style={styles.menuLabel} text={this.props.text} />
      </View>
      <View style={styles.menuRight}>
        <Label style={styles.menuSubLabel} text={this.props.subText} />
        <ListArrow style={styles.menuArrow} />
      </View>
    </Button>
  );
}
