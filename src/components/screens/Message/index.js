import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import MainContainer from 'systems/MainContainer';
import Room from './Room';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Message extends Component {
  render = () => (
    <MainContainer 
      title={this.props.title}
      alarm={this.props.alarm}
      point={this.props.point}
      alarmCount={this.props.alarmCount}
      onAlarm={this.props.onAlarm}
      onPoint={this.props.onPoint}
      isUnderline={true}
    >
      <View style={styles.messages}>
        <FlatList
          style={styles.list}
          data={this.props.data}
          renderItem={({ item }) => 
            <Room style={styles.room} selected={item.selected} />}
        />
      </View>
    </MainContainer>
  );
}

Message.defaultProps = {
  title: '메세지',
  alarm: '알람ㅋㅋㅋㅋ',
  point: 2155,
  alarmCount: 10,
  onAlarm: () => {},
  onPoint: () => {},
  data: [
    { key: 'Devin', selected: false },
    { key: 'Jackson', selected: true },
    { key: 'James', selected: false },
    { key: 'Joel', selected: false },
    { key: 'John', selected: false },
    { key: 'Jillian', selected: false },
    { key: 'Jimmy', selected: false },
    { key: 'Julie', selected: false },
  ],
};

Message.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  point: PropTypes.number,
  alarmCount: PropTypes.number,
  onAlarm: PropTypes.func,
  onPoint: PropTypes.func,
};

