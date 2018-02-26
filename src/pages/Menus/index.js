import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menus from 'screens/Menus';
import { logoutUser } from 'store/actions/auth';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  onLogout = () => {
    this.props.logoutUser();
    this.props.navigator.switchToTab({
      tabIndex: 0,
    });
    this.props.navigator.push({
      screen: 'Login', 
      passProps: this.props.navigator,
      overrideBackPress: true,
    });
  };

  render = () => (
    <Menus
      navigator={this.props.navigator}
      point={this.props.point}
      alarm={this.props.alarm}
      isLoading={this.props.isProgress}
      onLogout={this.onLogout}
    />
  );
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
