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
      nickname={this.props.nickname} 
      year={this.props.year} 
      sex={this.props.sex} 
      tall={this.props.tall} 
      shape={this.props.shape} 
      blood={this.props.blood} 
      religion={this.props.religion} 
      smoke={this.props.smoke} 
      drink={this.props.drink} 
      phone={this.props.phone} 
    />
  );

  render = () => (
    <Screen style={styles.screen}>
      <Header 
        style={styles.header} 
        isBackButton={this.props.isBackButton} 
        title={this.props.title}
        step={this.props.step}
        onBack={this.props.onBack}
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
  title: '자기소개를 해주세요',
  buttonLabel: '다음',
  step: '1/3',
  isBackButton: true,
  onPress: () => {},
  onBack: () => {},
};

MakeProfile.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  step: PropTypes.string,
  isBackButton: PropTypes.bool,
  onPress: PropTypes.func,
  onBack: PropTypes.func,
};

