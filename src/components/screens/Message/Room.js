import React, { Component } from 'react';
import { View } from 'react-native';
import FaceBox from 'systems/FaceBox';
import Label from 'atoms/Label';
import PropTypes from 'prop-types';
import styles from './styles';

const SIZE = 54.7;

export default class Room extends Component {
  render = () => (
    <View style={styles.room}>
      <FaceBox size={SIZE} style={styles.face} />
      <View style={styles.body}>
        <Label style={styles.name} text={this.props.name} />
        <Label style={styles.text} text={this.props.text} />
      </View>
      <View style={styles.dateBox}>
        <Label style={styles.date} text={this.props.date} />
      </View>
    </View>
  );
}

Room.defaultProps = {
  name: '메세지',
  text: '알람ㅋㅋㅋㅋ알람ㅋㅋㅋㅋ알람ㅋㅋㅋㅋ알람ㅋㅋㅋㅋ알람ㅋㅋㅋㅋ알람ㅋㅋㅋㅋ알람ㅋㅋㅋㅋ알람ㅋㅋㅋㅋ',
  date: '12월3일',
};

Room.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
