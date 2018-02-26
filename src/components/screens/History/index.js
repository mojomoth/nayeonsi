import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import MainContainer from 'systems/MainContainer';
import Card from 'systems/Card';
import PropTypes from 'prop-types';
import Header from './Header';
import styles from './styles';

export default class History extends Component {
  getCardInfo = (item) => {
    const age = parseInt((new Date).getFullYear()) - parseInt(item.year) + 1;
    return `${age}세, ${item.job}`;
  }

  getCardImage = item => ({ uri: item.images[0] });

  getCardData = (datas, isRemove) => {
    const list = [];
    for (const data of datas) {
      data.isRemove = isRemove;
      list.push(data);
    }

    return list;
  };

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
      menu={2}
      isUnderline
    >
      <View style={styles.cards}>
        <Header label={'나를 좋아한 연애카드'} onPress={this.props.onRemoveLikeMe} />
        <FlatList
          removeClippedSubviews
          style={styles.list}
          columnWrapperStyle={styles.listContainer}
          numColumns={3}
          data={this.getCardData(this.props.likeMe, this.props.isRemoveLikeMe)}
          renderItem={({ item }) => (
            <Card
              key={item.key}
              data={item}
              name={item.nickname}
              info={this.getCardInfo(item)}
              source={this.getCardImage(item)}
              isSecret={item.isSecret}
              isTop={item.isTop}
              isLocation={item.isLocation}
              isRemove={item.isRemove}
              onPress={() => this.props.onPress(item)}
              onDelete={() => this.props.onDelete(item, 'me')}
              style={styles.card} 
            />)}
        />
        <Header label={'내가 좋아하는 연애카드'} onPress={this.props.onRemoveLikeYou} />
        <FlatList
          removeClippedSubviews
          style={styles.list}
          columnWrapperStyle={styles.listContainer}
          numColumns={3}
          data={this.getCardData(this.props.likeYou, this.props.isRemoveLikeYou)}
          renderItem={({ item }) => (
            <Card
              key={item.key}
              data={item}
              name={item.nickname}
              info={this.getCardInfo(item)}
              source={this.getCardImage(item)}
              isSecret={item.isSecret}
              isTop={item.isTop}
              isLocation={item.isLocation}
              isRemove={item.isRemove}
              onPress={() => this.props.onPress(item)}
              onDelete={() => this.props.onDelete(item, 'you')}
              style={styles.card} 
            />)}
        />
      </View>
    </MainContainer>
  );
}

History.defaultProps = {
  title: '지난 연애 목록',
  alarm: '',
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

