import React, { Component } from 'react';
import { View } from 'react-native';
import Alarm from './Alarm';
import Point from './Point';
import HeadLabel from 'atoms/HeadLabel';
import PropTypes from 'prop-types';
import { PixelRatio } from 'constants/size';
import styles from './styles';

export default class MainHeader extends Component {
  render = () => {
    const headerStyle = [
      styles.header,
      this.props.style,
      { borderBottomWidth: this.props.isUnderline ? 0.7 * PixelRatio : 0 }];

    return (
      <View style={headerStyle}>
        <Alarm alarm={this.props.alarm} onPress={this.props.onAlarm} />
        <HeadLabel text={this.props.title} style={styles.titleLabel} />
        <Point point={this.props.point} onPress={this.props.onPoint} />
      </View>
    );
  };
}

MainHeader.defaultProps = {
  title: '헤더타이틀',
  point: 2155,
  alarm: 10,
  isUnderline: false,
  onAlarm: () => {},
  onPoint: () => {},
};

MainHeader.propTypes = {
  title: PropTypes.string,
  point: PropTypes.number,
  alarm: PropTypes.number,
  isUnderline: PropTypes.bool,
  onAlarm: PropTypes.func,
  onPoint: PropTypes.func,
};
