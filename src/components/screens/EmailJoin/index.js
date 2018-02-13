import React, { Component } from 'react';
import Screen from 'atoms/Screen';
import Header from 'systems/JoinHeader';
import Content from './Content';
import Footer from './Footer';
import PropTypes from 'prop-types';
import styles from './styles';

export default class EmailJoin extends Component {
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
        emailAlarm={this.props.emailAlarm}
        passwordAlarm={this.props.passwordAlarm}
      />
      <Footer 
        style={styles.footer} 
        onPress={this.props.onPress} 
        buttonLabel={this.props.buttonLabel}
      />
    </Screen>
  );
}

EmailJoin.defaultProps = {
  title: '이메일로 가입하기',
  buttonLabel: '회원가입 시작',
  emailAlarm: '이메일을 입력하세요',
  passwordAlarm: '비밀번호를 입력하세요',
  step: '1/3',
  isBackButton: true,
  onPress: () => {},
};

EmailJoin.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  emailAlarm: PropTypes.string,
  passwordAlarm: PropTypes.string,
  step: PropTypes.string,
  isBackButton: PropTypes.bool,
  onPress: PropTypes.func,
};

