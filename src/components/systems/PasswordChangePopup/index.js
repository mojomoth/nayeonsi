import React from 'react';
import BasicPopup from 'systems/BasicPopup';
import Panel from 'atoms/Panel';
import Footer from './Footer';
import Content from './Content';
import PropTypes from 'prop-types';
import styles from './styles';

export default class PasswordChangePopup extends BasicPopup {
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

PasswordChangePopup.defaultProps = {
  title: '비밀번호를 변경하실건가요?',
  confirmButton: '비밀번호 변경',
  cancelButton: '취소',
  onConfirm: () => {},
  onCancel: () => {},
  enabledConfirm: true,
  enabledCancel: true,
};

PasswordChangePopup.propTypes = {
  title: PropTypes.string,
  confirmButton: PropTypes.string,
  cancelButton: PropTypes.string,
  onPress: PropTypes.func,
  onCancel: PropTypes.func,
  enabledConfirm: PropTypes.bool,
  enabledCancel: PropTypes.bool,
};

