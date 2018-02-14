import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menus from 'screens/Menus';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render = () => (
    <Menus
      navigator={this.props.navigator}
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
