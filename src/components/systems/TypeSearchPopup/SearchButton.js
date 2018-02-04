import React, { Component } from 'react';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import MagnifyingGlass from 'icons/MagnifyingGlass';
import styles from './styles';

export default class SearchButton extends Component {
  render() {
    return (
      <FilledButton style={styles.searchButton}>
        <FilledButtonLabel style={styles.searchButtonLabel}>{this.props.text}</FilledButtonLabel>
        <MagnifyingGlass />
      </FilledButton>
    );
  }
}
