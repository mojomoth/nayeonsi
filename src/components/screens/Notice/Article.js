import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Label from 'atoms/Label';
import styles from './styles';

export default class Article extends Component {
  render = () => (
    <View style={styles.article}>
      <Label style={styles.title} text={this.props.title} />
      <Label style={styles.date} text={this.props.time} />
      <Label style={styles.text} text={this.props.text} />
    </View>
  );
}

Article.defaultProps = {
  title: '공지 제목',
  date: '공지 날짜',
  text: '내용 내용\n내용 내용',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
