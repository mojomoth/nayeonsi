import React, { Component } from 'react';
import { View } from 'react-native';
import Label from 'atoms/Label';
import PropTypes from 'prop-types';
import styles from './styles';

export default class InfoBox extends Component {
  render = () => (
    <View style={styles.date}>
      <View style={styles.dateBox}>
        <Label style={styles.dateLabel} text={this.props.text} />
      </View>
    </View>
  );
}

InfoBox.defaultProps = {
  text: '2017.10.10',
};

InfoBox.propTypes = {
  text: PropTypes.string,
};