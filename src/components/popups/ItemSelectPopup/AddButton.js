import React, { Component } from 'react';
import OutlineButton from 'atoms/OutlineButton';
import OutlineButtonLabel from 'atoms/OutlineButtonLabel';
import Plus from 'icons/Plus';
import styles from './styles';

export default class AddButton extends Component {
  render = () => (
    <OutlineButton style={styles.addButton}>
      <Plus style={styles.addIcon} />
      <OutlineButtonLabel style={styles.addButtonLabel}>{this.props.text}</OutlineButtonLabel>
    </OutlineButton>
  );
}
