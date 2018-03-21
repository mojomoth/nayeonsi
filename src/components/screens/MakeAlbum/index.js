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
      picture1={this.props.picture1}
      onPress1={this.props.onPress1}
      onDelete1={this.props.onDelete1}
      picture2={this.props.picture2}
      onPress2={this.props.onPress2}
      onDelete2={this.props.onDelete2}
      picture3={this.props.picture3}
      onPress3={this.props.onPress3}
      onDelete3={this.props.onDelete3}
      picture4={this.props.picture4}
      onPress4={this.props.onPress4}
      onDelete4={this.props.onDelete4}
      picture5={this.props.picture5}
      onPress5={this.props.onPress5}
      onDelete5={this.props.onDelete5}
      picture6={this.props.picture6}
      onPress6={this.props.onPress6}
      onDelete6={this.props.onDelete6}
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
  onBack: () => {},
  picture1: null,
  onPress1: () => {},
  onDelete1: () => {},
  picture2: null,
  onPress2: () => {},
  onDelete2: () => {},
  picture3: null,
  onPress3: () => {},
  onDelete3: () => {},
  picture4: null,
  onPress4: () => {},
  onDelete4: () => {},
  picture5: null,
  onPress5: () => {},
  onDelete5: () => {},
};

MakeAlbum.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  step: PropTypes.string,
  contentHeader: PropTypes.string,
  isBackButton: PropTypes.bool,
  onPress: PropTypes.func,
  onBack: PropTypes.func,
};

