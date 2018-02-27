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
      isLoading={this.props.isLoading}
      navigator={this.props.navigator} 
      menu={3}
      isUnderline
    >
      <View style={styles.messages}>
        <FlatList
          removeClippedSubviews
          style={styles.list}
          data={this.props.data}
          renderItem={({ item }) => (
            <Room 
              style={styles.room} 
              selected={item.selected} 
              name={item.name}
              text={item.text}
              date={item.date}
              source={item.source}
              isOpened={item.isOpened}
              onPress={() => this.props.onPress(item)}
            />)}
        />
      </View>
    </MainContainer>
  );
}

Message.defaultProps = {
  title: '메세지',
  alarm: '',
  point: 2155,
  alarmCount: 10,
  onAlarm: () => {},
  onPoint: () => {},
};

Message.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  point: PropTypes.number,
  alarmCount: PropTypes.number,
  onAlarm: PropTypes.func,
  onPoint: PropTypes.func,
};

