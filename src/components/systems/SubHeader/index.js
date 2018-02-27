import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import HeadLabel from 'atoms/HeadLabel';
import Button from 'atoms/Button';
import BackIcon from 'icons/Back';
import styles from './styles';
import { PixelRatio } from 'constants/size';

export default class SubHeader extends Component {
  render = () => {
    const headerStyle = [
      styles.header,
      this.props.style,
      { borderBottomWidth: this.props.isUnderline ? 0.7 * PixelRatio : 0 }];

    return (
      <View style={headerStyle}>
        <View style={styles.left}>
          <Button onPress={this.props.onBack} style={styles.backButton}>
            <BackIcon style={styles.back} />
          </Button>
        </View>

        <HeadLabel text={this.props.title} style={styles.titleLabel} />

        <View style={styles.right}>
          {this.props.children}
        </View>
      </View>
    );
  };
}

SubHeader.defaultProps = {
  style: null,
  isUnderline: false,
  onBack: () => {},
};

SubHeader.propTypes = {
  style: PropTypes.node,
  isUnderline: PropTypes.bool,
  onBack: PropTypes.func,
};
