import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from 'screens/Chat';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render = () => (
    <Chat
      navigator={this.props.navigator}
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
