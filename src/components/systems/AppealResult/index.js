import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Label from 'atoms/Label';
import LocationRoundIcon from 'icons/LocationRound';
import styles from './styles';

export default class AppealResult extends Component {
  render = () => (
    <View style={styles.appealResult}>
      <View style={styles.box}>
        <Label style={styles.title} text="주변에 자신을 어필했습니다." />
        <View style={styles.textBox}>
          <Label style={styles.text} text="가까운 상대 " />
          <Label style={styles.focusText} text={this.props.number} />
          <Label style={styles.text} text="명에게 전송 완료" />
        </View>
      </View>

      <LocationRoundIcon style={styles.icon} />
    </View>
  );
}

AppealResult.defaultProps = {
  number: 2155,
};

AppealResult.propTypes = {
  number: PropTypes.number,
};
