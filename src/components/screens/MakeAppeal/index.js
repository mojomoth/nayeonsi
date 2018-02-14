import React from 'react';
import MakeProfile from 'screens/MakeProfile';
import Content from './Content';
import PropTypes from 'prop-types';
import styles from './styles';

export default class MakeAppeal extends MakeProfile {
  content = () => (
    <Content 
      style={styles.content} 
      location={this.props.location} 
      school={this.props.school} 
      job={this.props.job} 
      attraction={this.props.attraction} 
      character={this.props.character} 
      like={this.props.like} 
      want={this.props.want} 
      play={this.props.play} 
      message={this.props.message} 
    />
  );
}

MakeAppeal.defaultProps = {
  title: '자신을 어필하세요',
  buttonLabel: '다음',
  step: '2/3',
  isBackButton: true,
  onPress: () => {},
  onBack: () => {},
};

MakeAppeal.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  step: PropTypes.string,
  isBackButton: PropTypes.bool,
  onPress: PropTypes.func,
  onBack: PropTypes.func,
};

