import React, { Component } from 'react';
import { connect } from 'react-redux';
import History from 'screens/History';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render = () => (
    <History
      navigator={this.props.navigator}
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
