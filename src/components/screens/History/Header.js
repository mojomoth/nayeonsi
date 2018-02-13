import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import TrashIcon from 'icons/Trash';
import styles from './styles';

export default class Header extends Component {
  render = () => (
    <View style={styles.header}>
      <Label style={styles.headerLabel} text={this.props.label} />
      <Button>
        <TrashIcon style={styles.headerTrash} type="red" />
      </Button>
    </View>
  );
}
