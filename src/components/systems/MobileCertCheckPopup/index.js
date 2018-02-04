import React from 'react';
import BasicPopup from 'systems/BasicPopup';
import Panel from 'atoms/Panel';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import PropTypes from 'prop-types';
import styles from './styles';

export default class MobileCertCheckPopup extends BasicPopup {
  header = () => <Header text={this.props.title} subText={this.props.subTitle} />;
  content = () => <Content data={this.props.data} />;
  footer = () => (
    <Footer  
      confirmButton={this.props.confirmButton}
      cancelButton={this.props.cancelButton}
      onConfirm={this.props.onConfirm}
      onCancel={this.props.onCancel}
      enabledConfirm={this.props.enabledConfirm}
      enabledCancel={this.props.enabledCancel}
    />
  );

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

MobileCertCheckPopup.defaultProps = {
  title: '전송받은 인증번호를 입력하세요.',
  subTitle: '입력된 휴대전화번호로 인증번호를 전송했습니다.',
  confirmButton: '인증하기 (00:00)',
  cancelButton: '다시 인증하기',
  onConfirm: () => {},
  onCancel: () => {},
  enabledConfirm: true,
  enabledCancel: true,
};

MobileCertCheckPopup.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  confirmButton: PropTypes.string,
  cancelButton: PropTypes.string,
  onPress: PropTypes.func,
  onCancel: PropTypes.func,
  enabledConfirm: PropTypes.bool,
  enabledCancel: PropTypes.bool,
};

