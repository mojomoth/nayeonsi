import React, { Component } from 'react';
import { View } from 'react-native';
import MainContainer from 'systems/MainContainer';
import MainCard from 'systems/MainCard';
import Loading from 'systems/Loading';
import PlusCardButton from 'systems/PlusCardButton';
import FloatingPlus from 'icons/FloatingPlus';
import Button from 'atoms/Button';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Main extends Component {
  cards = (datas) => {
    const cards = [];
    
    for (const data of datas) {
      const name = data.nickname;
      const age = parseInt((new Date).getFullYear()) - parseInt(data.year) + 1;
      // const info = `${age}세, ${data.location} / ${data.job}`;
      const info = `${age}세, ${data.job}`;
      const image = { uri: data.images[0] };

      cards.push(<MainCard 
        key={data.key}
        data={data}
        name={name}
        info={info}
        source={image}
        isSecret={data.isSecret}
        isTop={data.isTop}
        isLocation={data.isLocation}
        onPress={() => this.props.onPress(data)}
        style={styles.card} 
      />);
    }

    return cards;
  };

  render = () => (
    <View style={styles.root}>
      <MainContainer 
        title={this.props.title}
        alarm={this.props.alarm}
        point={this.props.point}
        alarmCount={this.props.alarmCount}
        onAlarm={this.props.onAlarm}
        onPoint={this.props.onPoint}
        isUnderline={false}
        navigator={this.props.navigator} 
        menu={1}
      >
        <View style={styles.cards}>
          {this.cards(this.props.data)}
          <PlusCardButton style={styles.plus} onPress={this.props.onPlus} />
        </View>
      </MainContainer>

      <Button style={styles.floatingPlus} onPress={this.props.onPlus}>
        <FloatingPlus />
      </Button>
      { this.props.isLoading ? <Loading /> : null }
    </View>
  );
}

Main.defaultProps = {
  title: '오늘의 연애',
  alarm: '',
  point: 2155,
  alarmCount: 10,
  data: null,
  onAlarm: () => {},
  onPoint: () => {},
  onPress: () => {},
  onPlus: () => {},
  isLoading: false,
};

Main.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  point: PropTypes.number,
  alarmCount: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
  onAlarm: PropTypes.func,
  onPoint: PropTypes.func,
  onPress: PropTypes.func,
  onPlus: PropTypes.func,
  isLoading: PropTypes.bool,
};

