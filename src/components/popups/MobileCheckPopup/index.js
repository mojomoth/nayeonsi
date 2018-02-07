import React from 'react';
import BasicPopup from 'popups/BasicPopup';
import Panel from 'atoms/Panel';
import Header from './Header';
import Content from './Content';
import PropTypes from 'prop-types';
import styles from './styles';

export default class MobiledCheckPopup extends BasicPopup {
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

MobiledCheckPopup.defaultProps = {
  title: '휴대전화 번호 인증',
  subTitle: '휴대전화 번호를 인증해 주세요.',
  buttonText: '인증번호 전송',
  onPress: () => {},
  enabled: true,
};

MobiledCheckPopup.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  enabled: PropTypes.bool,
};

