import React, { Component } from 'react';
import { View } from 'react-native';
import ListOption from 'atoms/ListOption';
import Label from 'atoms/Label';
import SearchButton from './SearchButton';
import PropTypes from 'prop-types';
import styles from './styles';

export default class TypeSearch extends Component {
  render() {
    return (
      <ListOption>
        <View style={styles.optionLeft}>
          <Label style={styles.typeLabel} text={this.props.text} />
        </View>
        <View style={styles.optionRight}>
          <SearchButton text={this.props.buttonText} />
        </View>
      </ListOption>
    );
  }
}

TypeSearch.defaultProps = {
  text: '연애타입',
  buttonText: '찾기',
};

TypeSearch.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
};