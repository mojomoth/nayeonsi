import React from 'react';
import BasicPopup from 'popups/BasicPopup';
import Panel from 'atoms/Panel';
import CloseButton from 'systems/CloseButton';
import Header from './Header';
import Content from './Content';
import PropTypes from 'prop-types';
import styles from './styles';

export default class TypeSearchPopup extends BasicPopup {
  header = () => <Header text={this.props.title} />;
  content = () => <Content data={this.props.data} onPress={this.props.onPress} />;

  render = () => (
    <Panel style={styles.panel}>
      <CloseButton style={styles.closeButton} onPress={this.props.onClose} /> 
      {this.header()}
      {this.content()}
    </Panel>
  );
}

TypeSearchPopup.defaultProps = {
  title: '맞춤연애',
  data: [
    { key: 'Devin', selected: false },
    { key: 'Jackson', selected: true },
    { key: 'James', selected: false },
    { key: 'Joel', selected: false },
    { key: 'John', selected: false },
    { key: 'Jillian', selected: false },
    { key: 'Jimmy', selected: false },
    { key: 'Julie', selected: false },
  ],
};

TypeSearchPopup.propTypes = {
  title: PropTypes.string,
};

