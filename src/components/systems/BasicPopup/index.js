import React, { Component } from 'react';
import Panel from 'atoms/Panel';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import PropTypes from 'prop-types';
import styles from './styles';

export default class BasicPopup extends Component {
  header = () => <Header text={this.props.title} />;
  content = () => <Content text={this.props.text} />;
  footer = () => 
    (<Footer 
      onPress={this.props.onPress} 
      enabled={this.props.enabled} 
      buttonText={this.props.buttonText} 
    />);

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

BasicPopup.defaultProps = {
  title: '팝업제목',
  text: '팝업내용',
  buttonText: '확인',
  onPress: () => {},
  enabled: true,
};

BasicPopup.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  enabled: PropTypes.bool,
};

