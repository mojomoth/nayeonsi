import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Label from 'atoms/Label';
import AppealType from './AppealType';
import styles from './styles';

export default class Appeal extends Component {
  types = (data) => {
    const elements = [];
    for (const node of data) {
      elements.push(<AppealType key={node} text={node} />);
    }

    return elements;
  };

  appeal = (title, data) => (
    <View style={styles.appealBox}>
      <Label style={styles.appealHeader} text={title} />
      <View style={styles.appealTypeBox}>
        {this.types(data)}
      </View>
    </View>
  );

  render = () => (
    <View style={styles.appeal}>
      {this.appeal(this.props.appeal1, this.props.data1)}
      {this.appeal(this.props.appeal2, this.props.data2)}
      {this.appeal(this.props.appeal3, this.props.data3)}
      {this.appeal(this.props.appeal4, this.props.data4)}
      {this.appeal(this.props.appeal5, this.props.data5)}
    </View>
  );
}

Appeal.defaultProps = {
  appeal1: '제 성격은요.',
  appeal2: '제 매력포인트는요.',
  appeal3: '저는 이런 것에 관심 있어요.',
  appeal4: '저의 이상형은요.',
  appeal5: '저의 데이트 스타일은요.',
  data1: ['A', 'B', 'C', 'B', 'C', 'B', 'C', 'B', 'C', 'B', 'C', 'B', 'C', 'B', 'C', 'B', 'C'],
  data2: ['A', 'B', 'C'],
  data3: ['A', 'B', 'C'],
  data4: ['A', 'B', 'C'],
  data5: ['A', 'B', 'C'],
};

Appeal.propTypes = {
  appeal1: PropTypes.string,
  appeal2: PropTypes.string,
  appeal3: PropTypes.string,
  appeal4: PropTypes.string,
  appeal5: PropTypes.string,
  data1: PropTypes.arrayOf(PropTypes.string),
  data2: PropTypes.arrayOf(PropTypes.string),
  data3: PropTypes.arrayOf(PropTypes.string),
  data4: PropTypes.arrayOf(PropTypes.string),
  data5: PropTypes.arrayOf(PropTypes.string),
};
