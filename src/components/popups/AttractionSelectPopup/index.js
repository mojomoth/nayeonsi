import React from 'react';
import BasicPopup from 'popups/BasicPopup';
import Panel from 'atoms/Panel';
import Header from './Header';
import Content from './Content';
import PropTypes from 'prop-types';
import styles from './styles';

export default class AttractionSelectPopup extends BasicPopup {
  header = () => <Header text={this.props.title} subText={this.props.subTitle} />;
  content = () => <Content data={this.props.data} />;

  render() {
    return (
      <Panel style={styles.panel}>
        {this.header()}
        {this.content()}
        {this.footer()}
      </Panel>
    );
  }
}

AttractionSelectPopup.defaultProps = {
  title: '선택팝업제목',
  subTitle: '선택팝업  보조 제목',
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
  enabled: true,
};

AttractionSelectPopup.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  enabled: PropTypes.bool,
};

