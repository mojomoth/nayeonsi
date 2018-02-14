import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'screens/Modal';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render = () => (
    <Modal>
      { this.props.popup }
    </Modal>
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
