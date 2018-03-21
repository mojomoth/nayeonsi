import React, { Component } from 'react';
import { connect } from 'react-redux';
import Withdraw from 'screens/Withdraw';
import { logoutUser } from 'store/actions/auth';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  onBack = () => this.props.navigator.pop();

  render = () => (
    <Withdraw
      navigator={this.props.navigator}
      onBack={this.onBack}
    />
  );
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
