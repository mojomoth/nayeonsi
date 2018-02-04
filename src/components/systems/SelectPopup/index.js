import React from 'react';
import BasicPopup from 'systems/BasicPopup';
import Panel from 'atoms/Panel';
import Header from './Header';
import Content from './Content';
import PropTypes from 'prop-types';
import styles from './styles';

export default class SelectPopup extends BasicPopup {
  header = () => <Header text={this.props.title} />;
  content = () => <Content data={this.props.data} />;

  render() {
    return (
      <Panel style={styles.panel}>
        {this.header()}
        {this.content()}
      </Panel>
    );
  }
}

SelectPopup.defaultProps = {
  title: '선택팝업제목',
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

SelectPopup.propTypes = {
  title: PropTypes.string,
};

