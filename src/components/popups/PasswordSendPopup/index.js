import React from 'react';
import BasicPopup from 'popups/BasicPopup';
import Panel from 'atoms/Panel';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import PropTypes from 'prop-types';
import styles from './styles';

export default class PasswordSendPopup extends BasicPopup {
  header = () => <Header text={this.props.title} subText={this.props.subTitle} />;
  content = () => (
    <Content 
      data={this.props.data} 
      onChangeText={this.props.onChangeText}
    />
  );
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

  render = () => (
    <Panel style={styles.panel}>
      {this.header()}
      {this.content()}
      {this.footer()}
    </Panel>
  );
}

PasswordSendPopup.defaultProps = {
  title: '가입시 등록한 이메일을 입력하세요.',
  subTitle: '임시 비밀번호를 보내드립니다.',
  confirmButton: '비밀번호 전송',
  cancelButton: '취소',
  onConfirm: () => {},
  onCancel: () => {},
  enabledConfirm: true,
  enabledCancel: true,
};

PasswordSendPopup.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  confirmButton: PropTypes.string,
  cancelButton: PropTypes.string,
  onPress: PropTypes.func,
  onCancel: PropTypes.func,
  enabledConfirm: PropTypes.bool,
  enabledCancel: PropTypes.bool,
};

