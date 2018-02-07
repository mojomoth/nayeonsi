import React from 'react';
import MakeProfile from 'screens/MakeProfile';
import Content from './Content';
import PropTypes from 'prop-types';
import styles from './styles';

export default class MakeAlbum extends MakeProfile {
  content = () => (
    <Content 
      style={styles.content} 
      contentHeader={this.props.contentHeader}
    />
  );
}

MakeAlbum.defaultProps = {
  title: '사진으로 프로필 완성',
  buttonLabel: '다음',
  step: '3/3',
  contentHeader: '사진은 선명하고 얼굴 또는 전신을\n확인할 수 있어야 합니다.',
  isBackButton: true,
  onPress: () => {},
};

MakeAlbum.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  step: PropTypes.string,
  contentHeader: PropTypes.string,
  isBackButton: PropTypes.bool,
  onPress: PropTypes.func,
};

