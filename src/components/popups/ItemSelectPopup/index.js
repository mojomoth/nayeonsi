import React from 'react';
import BasicPopup from 'popups/BasicPopup';
import Panel from 'atoms/Panel';
import Header from './Header';
import Content from './Content';
import { PixelRatio } from 'constants/size';
import PropTypes from 'prop-types';
import styles from './styles';

export default class ItemSelectPopup extends BasicPopup {
  header = () => <Header text={this.props.title} subText={this.props.subTitle} />;
  content = () => {
    const contentStyle = {
      height: this.props.contentHeight * PixelRatio,
    };

    return (
      <Content 
        style={contentStyle}
        data={this.props.data} 
        onSelected={this.props.onSelected}
        state={this.props.state}
      />
    );
  }

  render = () => (
    <Panel style={styles.panel}>
      {this.header()}
      {this.content()}
      {this.footer()}
    </Panel>
  );
}

ItemSelectPopup.defaultProps = {
  title: '선택팝업제목',
  subTitle: '2가지 이상 선택하세요.',
  data: [
    { key: 'Devin', selected: false },
    { key: 'Jackson', selected: true },
    { key: 'James', selected: false },
    { key: 'Joel', selected: false },
    { key: 'John', selected: false },
    { key: 'Jillian', selected: false },
    { key: 'Jimmy', selected: false },
    { key: 'Julie', selected: false },
    { key: 'James', selected: false },
    { key: 'Joel', selected: false },
    { key: 'John', selected: false },
    { key: 'Jillian', selected: false },
    { key: 'Jimmy', selected: false },
    { key: 'Julie', selected: false },
  ],
  buttonText: '선택 완료',
  onPress: () => {},
  onSelected: () => {},
  contentHeight: 200,
  enabled: true,
};

ItemSelectPopup.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  onSelected: PropTypes.func,
  enabled: PropTypes.bool,
  contentHeight: PropTypes.number,
};

