import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'atoms/Button';
import BackIcon from 'icons/Back';
import MoreIcon from 'icons/More';
import styles from './styles';

export default class FloatingHeader extends Component {
  render = () => (
    <View style={styles.floatingHeader}>
      <View style={styles.backBox}>
        <Button onPress={this.props.onBack}>
          <View style={styles.iconBox}>
            <BackIcon type="white" />
          </View>
        </Button>
      </View>
      
      <View style={styles.moreBox}>
        <Button onPress={this.props.onMore}>
          <View style={styles.iconBox}>
            {/* <MoreIcon type="white" style={styles.more} /> */}
          </View>
        </Button>
      </View>
    </View>
  );
}
