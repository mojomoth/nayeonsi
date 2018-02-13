import React, { Component } from 'react';
import { View } from 'react-native';
import Label from 'atoms/Label';
import styles from './styles';

export default class ContentHeader extends Component {
  render = () => (
    <View style={styles.contentHeader}>
      <Label style={styles.contentHeaderLabel} text={this.props.contentHeader} />
    </View>
  );
}
