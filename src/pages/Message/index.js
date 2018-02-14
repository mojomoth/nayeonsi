import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from 'screens/Message';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render = () => (
    <Message
      navigator={this.props.navigator}
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
