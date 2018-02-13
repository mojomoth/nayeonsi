import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Screen from 'atoms/Screen';
import Header from 'systems/JoinHeader';
import Content from './Content';
import Footer from './Footer';
import PropTypes from 'prop-types';
import styles from './styles';

export default class MakeProfile extends Component {
  content = () => (
    <Content 
      style={styles.content} 
    />
  );

  render = () => (
    <Screen style={styles.screen}>
      <Header 
        style={styles.header} 
        isBackButton={this.props.isBackButton} 
        title={this.props.title}
        step={this.props.step}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        {this.content()}
        <Footer 
          style={styles.footer} 
          onPress={this.props.onPress} 
          buttonLabel={this.props.buttonLabel}
        />
      </ScrollView>
    </Screen>
  );
}

MakeProfile.defaultProps = {
  title: '사진으로 프로필 완성',
  buttonLabel: '다음',
  step: '3/3',
  isBackButton: true,
  onPress: () => {},
};

MakeProfile.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  step: PropTypes.string,
  isBackButton: PropTypes.bool,
  onPress: PropTypes.func,
};

