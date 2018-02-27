import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import styles from './styles';

export default class LabelItem extends Component {
  render = () => (
    <Button style={styles.itemBox} onPress={this.props.onPress}>
      <Label style={styles.itemBoxLabel} text={this.props.text} />
      <View style={styles.lebelRight}>
        {this.props.children}
      </View>
    </Button>     
  );
}

LabelItem.defaultProps = {
  text: '',
};

LabelItem.propTypes = {
  text: PropTypes.string,
};
