import React, { Component } from 'react';
import { View } from 'react-native';
import TitleLabel from 'atoms/TitleLabel';
import CloseButton from 'systems/CloseButton';
import styles from './styles';

export default class Header extends Component {
  render = () => (
    <View style={styles.header}>
      <TitleLabel style={styles.titleLabel} text={this.props.text} />
      { 
        this.props.isCloseButton ? 
          null : <CloseButton style={styles.closeButton} onPress={this.props.onClose} /> 
      }
    </View>
  );
}
