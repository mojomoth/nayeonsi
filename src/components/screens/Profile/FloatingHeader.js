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
        <Button>
          <View style={styles.icon}>
            <BackIcon type="white" style={styles.back} />
          </View>
        </Button>
      </View>
      
      <View style={styles.iconBox}>
        <Button>
          <View style={styles.icon}>
            <MoreIcon type="white" style={styles.more} />
          </View>
        </Button>
      </View>
    </View>
  );
}
