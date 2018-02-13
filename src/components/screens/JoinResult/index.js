import React, { Component } from 'react';
import Screen from 'atoms/Screen';
import Header from 'systems/JoinHeader';
import Content from './Content';
import Footer from './Footer';
import PropTypes from 'prop-types';
import styles from './styles';

export default class JoinResult extends Component {
  render = () => (
    <Screen style={styles.screen}>
      <Header 
        style={styles.header} 
        isBackButton={this.props.isBackButton} 
        title={this.props.title}
        step={this.props.step}
      />
      <Content 
        style={styles.content} 
        resultText={this.props.resultText}
      />
      <Footer 
        style={styles.footer} 
        onPress={this.props.onPress} 
        buttonLabel={this.props.buttonLabel}
      />
    </Screen>
  );
}

JoinResult.defaultProps = {
  title: '가입승인',
  buttonLabel: '가입신청',
  step: '',
  resultText: '운영진의 심사 후 가입승인 됩니다.',
  isBackButton: false,
  onPress: () => {},
};

JoinResult.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  step: PropTypes.string,
  resultText: PropTypes.string,
  isBackButton: PropTypes.bool,
  onPress: PropTypes.func,
};

