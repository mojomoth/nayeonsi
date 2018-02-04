import React from 'react';
import BasicPopup from 'systems/BasicPopup';
import Panel from 'atoms/Panel';
import Footer from './Footer';
import Content from './Content';
import PropTypes from 'prop-types';
import styles from './styles';

export default class PointUsePopup extends BasicPopup {
  content = () => <Content point={this.props.point} />;
  footer = () => (
    <Footer  
      point={this.props.point}
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

PointUsePopup.defaultProps = {
  title: '보유포인트',
  point: 0,
  confirmButton: '포인트사용',
  cancelButton: '취소',
  onConfirm: () => {},
  onCancel: () => {},
  enabledConfirm: true,
  enabledCancel: true,
};

PointUsePopup.propTypes = {
  title: PropTypes.string,
  point: PropTypes.number,
  confirmButton: PropTypes.string,
  cancelButton: PropTypes.string,
  onPress: PropTypes.func,
  onCancel: PropTypes.func,
  enabledConfirm: PropTypes.bool,
  enabledCancel: PropTypes.bool,
};

