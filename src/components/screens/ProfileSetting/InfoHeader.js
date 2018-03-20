import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Label from 'atoms/Label';
import styles from './styles';

export default class InfoHeader extends Component {
  render = () => (
    <View style={styles.infoHeader}>
      <Label style={styles.infoHeaderLabel} text={this.props.text} />
    </View>
  );
}

InfoHeader.defaultProps = {
  text: '프로필 사진은 승인 후 완료 됩니다.',
};

InfoHeader.propTypes = {
  text: PropTypes.string,
};
