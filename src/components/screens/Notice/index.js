import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import MainContainer from 'systems/MainContainer';
import styles from './styles';

export default class Notice extends Component {
  render = () => (
    <MainContainer 
      title={this.props.title}
      alarm={this.props.alarm}
      alarmCount={this.props.alarmCount}
      navigator={this.props.navigator} 
      menu={4}
      isUnderline
      isScroll={false}
      isMain={false}
      onBack={this.props.onBack}
    >
      <View style={styles.content}>
      </View>
    </MainContainer>
  );
}

Notice.defaultProps = {
  title: '공지사항',
  alarm: '',
  onBack: () => {},
};

Notice.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  onBack: PropTypes.func,
};
