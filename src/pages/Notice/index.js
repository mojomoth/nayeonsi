import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notice from 'screens/Notice';
import { logoutUser } from 'store/actions/auth';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  onBack = () => this.props.navigator.pop();

  render = () => (
    <Notice
      navigator={this.props.navigator}
      alarm={this.props.alarm}
      alarmCount={this.props.alarmCount}
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
