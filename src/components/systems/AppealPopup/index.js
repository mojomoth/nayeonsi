import React from 'react';
import BasicPopup from 'systems/BasicPopup';
import Panel from 'atoms/Panel';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import PropTypes from 'prop-types';
import styles from './styles';

export default class AppealPopup extends BasicPopup {
  header = () => (
    <Header 
      text={this.props.text} 
      name={this.props.name} 
    />
  );

  content = () => (
    <Content 
      point={this.props.point} 
      aboutAppeal={this.props.aboutAppeal} 
    />
  );

  footer = () => (
    <Footer  
      point={this.props.point}
      aboutSecret={this.props.aboutSecret}
      secretButton={this.props.secretButton}
      appealButton={this.props.appealButton}
      cancelButton={this.props.cancelButton}
      onSecret={this.props.onConfirm}
      onAppeal={this.props.onConfirm}
      onCancel={this.props.onCancel}
      enabledSecret={this.props.enabledConfirm}
      enabledAppeal={this.props.enabledConfirm}
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

AppealPopup.defaultProps = {
  name: '불멸의이순신님',
  text: ' 님을\n좋아하세요?',
  point: 0,
  aboutAppeal: '서로 좋아요를 보내면 대화를\n시작 할 수 있어요.',
  aboutSecret: '시크릿 어필은 상대방에게 프로필사진을 숨기고 보냅니다.',
  secretButton: '시크릿 어필하기',
  appealButton: '좋아요',
  cancelButton: '아니오',
  onSecret: () => {},
  onAppeal: () => {},
  onCancel: () => {},
  enabledSecret: true,
  enabledAppeal: true,
  enabledCancel: true,
};

AppealPopup.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  point: PropTypes.number,
  aboutAppeal: PropTypes.string,
  aboutSecret: PropTypes.string,
  secretButton: PropTypes.string,
  appealButton: PropTypes.string,
  cancelButton: PropTypes.string,
  onSecret: PropTypes.func,
  onAppeal: PropTypes.func,
  onCancel: PropTypes.func,
  enabledSecret: PropTypes.bool,
  enabledAppeal: PropTypes.bool,
  enabledCancel: PropTypes.bool,
};

