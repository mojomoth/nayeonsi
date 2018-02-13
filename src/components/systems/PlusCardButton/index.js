import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import PlusIcon from 'icons/Plus';
import PropTypes from 'prop-types';
import styles from './styles';

export default class PlusCardButton extends Component {
  render = () => (
    <View style={[styles.card, this.props.style]}>
      <Button onPress={this.props.onPress}>
        <View style={styles.plusBox}>
          <PlusIcon type={3} />
        </View>
      </Button>

      <Label style={styles.label} text={this.props.text} />
    </View>
  );
}

PlusCardButton.defaultProps = {
  text: '맞춤연애',
  onPress: () => {},
};

PlusCardButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};
