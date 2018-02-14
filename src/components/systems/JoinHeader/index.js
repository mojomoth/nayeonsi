import React, { Component } from 'react';
import { View } from 'react-native';
import HeadLabel from 'atoms/HeadLabel';
import Label from 'atoms/Label';
import Button from 'atoms/Button';
import BackIcon from 'icons/Back';
import styles from './styles';
import PropTypes from 'prop-types';

export default class JoinHeader extends Component {
  render = () => (
    <View style={[styles.header, this.props.style]}>
      <View style={styles.left}>
        { this.props.isBackButton ? 
          <Button onPress={this.props.onBack} style={styles.backButton}>
            <BackIcon style={styles.back} />
          </Button>
        : null }
      </View>

      <HeadLabel text={this.props.title} style={styles.titleLabel} />

      <View style={styles.right}>
        <Label text={this.props.step} style={styles.statusLabel} />
      </View>
    </View>
  );
}

JoinHeader.defaultProps = {
  style: null,
  onBack: () => {},
};

JoinHeader.propTypes = {
  style: PropTypes.node,
  onBack: PropTypes.func,
};
