import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'atoms/styles';

export default class ListOption extends Component {
  render = () => {
    const listOptionStyle = [styles.listOption, this.props.style];
    return (
      <View style={listOptionStyle}>
        {this.props.children}
      </View>
    );
  };
}

ListOption.defaultProps = {
  children: null,
};

ListOption.propTypes = {
  children: PropTypes.node,
};
