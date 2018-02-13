import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import MainContainer from 'systems/MainContainer';
import Card from 'systems/Card';
import PropTypes from 'prop-types';
import Header from './Header';
import styles from './styles';

export default class History extends Component {
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
      <View style={styles.cards}>
        <Header label={'나를 좋아하는 사람'} />
        <FlatList
          style={styles.list}
          columnWrapperStyle={styles.listContainer}
          numColumns={3}
          data={this.props.data}
          renderItem={({ item }) => 
            <Card style={styles.card} text={item.key} selected={item.selected} />}
        />
        <Header label={'주변에서 어필을 보낸사람'} />
        <FlatList
          style={styles.list}
          columnWrapperStyle={styles.listContainer}
          numColumns={3}
          data={this.props.data}
          renderItem={({ item }) => 
            <Card style={styles.card} text={item.key} selected={item.selected} />}
        />
      </View>
    </MainContainer>
  );
}

History.defaultProps = {
  title: '지난 연애 목록',
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

History.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  point: PropTypes.number,
  alarmCount: PropTypes.number,
  onAlarm: PropTypes.func,
  onPoint: PropTypes.func,
};

