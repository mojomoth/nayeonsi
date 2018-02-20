import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Label from 'atoms/Label';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import LockIcon from 'icons/Lock';
import MainContainer from 'systems/MainContainer';
import PropTypes from 'prop-types';
import styles from './styles';

// const image = require('assets/images/temp.png');

export default class Menus extends Component {
  render = () => (
    <MainContainer 
      title={this.props.title}
      alarm={this.props.alarm}
      point={this.props.point}
      alarmCount={this.props.alarmCount}
      onAlarm={this.props.onAlarm}
      onPoint={this.props.onPoint}
      isUnderline={true}
      navigator={this.props.navigator} 
      menu={5}
    >
    </MainContainer>
  );
}

Menus.defaultProps = {
  title: '내 메뉴',
  alarm: '',
  point: 2155,
  alarmCount: 10,
  onAlarm: () => {},
  onPoint: () => {},
  onPress: () => {},
};

Menus.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  point: PropTypes.number,
  alarmCount: PropTypes.number,
  onAlarm: PropTypes.func,
  onPoint: PropTypes.func,
  onPress: PropTypes.func,
};
