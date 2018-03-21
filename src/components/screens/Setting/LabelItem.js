import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import styles from './styles';

export default class LabelItem extends Component {
  render = () => {
    const labelStyle = this.props.isFocus ? 
      styles.itemBoxFocusLabel : styles.itemBoxLabel;

    return (
      <Button style={styles.itemBox} onPress={this.props.onPress}>
        <Label style={labelStyle} text={this.props.text} />
        <View style={styles.lebelRight}>
          {this.props.children}
        </View>
      </Button>     
    );
  };
}

LabelItem.defaultProps = {
  text: '',
};

LabelItem.propTypes = {
  text: PropTypes.string,
};
