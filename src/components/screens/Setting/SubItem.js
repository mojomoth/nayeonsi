import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import styles from './styles';

export default class SubItem extends Component {
  render = () => (
    <Button style={styles.itemBox} onPress={this.props.onPress}>
      <Label style={styles.subBoxLabel} text={this.props.text} />
    </Button>     
  );
}

SubItem.defaultProps = {
  text: '',
};

SubItem.propTypes = {
  text: PropTypes.string,
};
