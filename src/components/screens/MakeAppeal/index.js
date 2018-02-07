import React from 'react';
import MakeProfile from 'screens/MakeProfile';
import Content from './Content';
import PropTypes from 'prop-types';
import styles from './styles';

export default class MakeAppeal extends MakeProfile {
  content = () => (
    <Content 
      style={styles.content} 
    />
  );
}

MakeAppeal.defaultProps = {
  title: '자신을 어필하세요',
  buttonLabel: '다음',
  step: '2/3',
  isBackButton: true,
  onPress: () => {},
};

MakeAppeal.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  step: PropTypes.string,
  isBackButton: PropTypes.bool,
  onPress: PropTypes.func,
};

