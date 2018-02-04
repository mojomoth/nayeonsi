import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from 'atoms/styles';

export default class ArticlePanel extends Component {
  render = () => {
    const panelStyle = {
      height: this.props.height,
    };

    return (
      <View style={[styles.articlePanel, panelStyle, this.props.style]}>
        {this.props.children}
      </View>
    );
  };
}

ArticlePanel.defaultProps = {
  height: 221,
};

ArticlePanel.propTypes = {
  height: PropTypes.number,
};
