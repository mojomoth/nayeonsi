import React, { Component } from 'react';
import { View } from 'react-native';
import MainContainer from 'systems/MainContainer';
import MainCard from 'systems/MainCard';
import PlusCardButton from 'systems/PlusCardButton';
import FloatingPlus from 'icons/FloatingPlus';
import Button from 'atoms/Button';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Main extends Component {
  render = () => (
    <View>
      <MainContainer 
        title={this.props.title}
        alarm={this.props.alarm}
        point={this.props.point}
        alarmCount={this.props.alarmCount}
        onAlarm={this.props.onAlarm}
        onPoint={this.props.onPoint}
        isUnderline={false}
      >
        <View style={styles.cards}>
          <MainCard style={styles.card} />
          <MainCard style={styles.card} />
          <MainCard style={styles.card} />
          <MainCard style={styles.card} />
          <MainCard style={styles.card} />
          <MainCard style={styles.card} />
          <MainCard style={styles.card} />
          <PlusCardButton style={styles.plus} />
        </View>
      </MainContainer>

      <Button>
        <FloatingPlus style={styles.floatingPlus} />
      </Button>
    </View>
  );
}

Main.defaultProps = {
  title: '오늘의 연애',
  alarm: '알람ㅋㅋㅋㅋ',
  point: 2155,
  alarmCount: 10,
  onAlarm: () => {},
  onPoint: () => {},
};

Main.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  point: PropTypes.number,
  alarmCount: PropTypes.number,
  onAlarm: PropTypes.func,
  onPoint: PropTypes.func,
};
