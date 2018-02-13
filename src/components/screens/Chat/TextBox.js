import React, { Component } from 'react';
import { View } from 'react-native';
import Label from 'atoms/Label';
import FaceBox from 'systems/FaceBox';
import PropTypes from 'prop-types';
import Date from './Date';
import styles from './styles';

const FACE_SIZE = 45.3;

export default class TextBox extends Component {
  you = () => (
    <View style={styles.you}>
      { this.props.isFace ? <FaceBox style={styles.face} size={FACE_SIZE} /> : null }
      <View style={styles.youBox}>
        <Label style={styles.youLabel} text={this.props.text} />
      </View>
      { this.props.isTime ? <Label style={styles.timeLabel} text={this.props.time} /> : null }
    </View>
  );

  me = () => (
    <View style={styles.me}>
      { this.props.isTime ? <Label style={styles.timeLabel} text={this.props.time} /> : null }
      <View style={styles.meBox}>
        <Label style={styles.meLabel} text={this.props.text} />
      </View>
    </View>
  );

  render = () => {
    let element = null;
    if (this.props.type === 1) {
      element = this.me();
    } else if (this.props.type === 2) {
      element = this.you();
    } else {
      element = <Date />;
    }

    return element;
  };
}

TextBox.defaultProps = {
  text: '안녕하세요',
  time: '2017.10.10',
  isFace: false,
  isDate: true,
};

TextBox.propTypes = {
  text: PropTypes.string,
  time: PropTypes.string,
  isFace: PropTypes.bool,
  isTime: PropTypes.bool,
};
