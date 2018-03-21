import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Label from 'atoms/Label';
import styles from './styles';

export default class InfoHeader extends Component {
  render = () => {
    const text = this.props.isModifying ? '프로필 변경 심사중입니다.' : '프로필 변경은 승인 후 완료 됩니다.';
    const style = this.props.isModifying ? styles.infoFocusHeader : styles.infoHeader;
    
    return (
      <View style={style}>
        <Label style={styles.infoHeaderLabel} text={text} />
      </View>
    );
  };
}

InfoHeader.defaultProps = {
  text: '프로필 사진은 승인 후 완료 됩니다.',
};

InfoHeader.propTypes = {
  text: PropTypes.string,
};
