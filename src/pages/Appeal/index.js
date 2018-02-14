import React, { Component } from 'react';
import { connect } from 'react-redux';
import Appeal from 'screens/Appeal';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render = () => (
    <Appeal
      navigator={this.props.navigator}
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
