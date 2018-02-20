import React from 'react';
import { View } from 'react-native';
import ProfileHeader from 'systems/ProfileHeader';
import MoreIcon from 'icons/More';
import Button from 'atoms/Button';
import styles from './styles';

export default class Header extends ProfileHeader {
  right = () => (
    <View style={styles.iconBox}>
      <Button onPress={this.props.onMore}>
        <View style={styles.icon}>
          <MoreIcon style={styles.more} />
        </View>
      </Button>
    </View>
  );
}
