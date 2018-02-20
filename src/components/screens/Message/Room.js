import React, { Component } from 'react';
import { View } from 'react-native';
import FaceBox from 'systems/FaceBox';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import PropTypes from 'prop-types';
import styles from './styles';

const SIZE = 54.7;

export default class Room extends Component {
  render = () => (
    <Button style={styles.room} onPress={this.props.onPress}>
      <FaceBox size={SIZE} style={styles.face} source={this.props.source} />
      <View style={styles.body}>
        <Label style={styles.name} text={this.props.name} />
        <Label style={this.props.isOpened ? styles.text : styles.openText} text={this.props.text} />
      </View>
      <View style={styles.dateBox}>
        <Label style={styles.date} text={this.props.date} />
      </View>
    </Button>
  );
}

Room.defaultProps = {
  name: '메세지',
  text: '',
  date: '',
};

Room.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
