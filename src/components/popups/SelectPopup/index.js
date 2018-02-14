import React from 'react';
import BasicPopup from 'popups/BasicPopup';
import Panel from 'atoms/Panel';
import Header from './Header';
import Content from './Content';
import { PixelRatio } from 'constants/size';
import PropTypes from 'prop-types';
import styles from './styles';

export default class SelectPopup extends BasicPopup {
  header = () => (
    <Header 
      text={this.props.title} 
      isCloseButton={this.props.isCloseButton} 
      onClose={this.props.onClose} 
    />
  );

  content = () => {
    const contentStyle = {
      height: this.props.contentHeight * PixelRatio,
    };

    return (
      <Content 
        style={contentStyle}
        data={this.props.data} 
        onSelected={this.props.onSelected}
      />
    );
  }

  render = () => (
    <Panel style={styles.panel}>
      {this.header()}
      {this.content()}
    </Panel>
  );
}

SelectPopup.defaultProps = {
  title: '선택팝업제목',
  isCloseButton: false,
  onClose: () => {},
  onSelected: () => {},
  contentHeight: 239,
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
  isCloseButton: PropTypes.bool,
  onClose: PropTypes.func,
  onSelected: PropTypes.func,
  contentHeight: PropTypes.number,
};

