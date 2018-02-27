import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Shop from 'screens/Shop';
import { requestChargePoint } from 'store/actions/user';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  onBack = () => this.props.navigator.pop();

  onPress = point => this.props.requestChargePoint(this.props.user.key, point, 'shop');

  render = () => (
    <Shop
      navigator={this.props.navigator}
      alarm={this.props.alarm}
      alarmCount={this.props.alarmCount}
      onBack={this.onBack}
      onPress={this.onPress}
      point={this.props.point}
      isLoading={this.props.isProgress}
    />
  );
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
  isProgress: state.user.isProgress,
});

const mapDispatchToProps = dispatch => ({
  requestChargePoint: (key, point, action) => dispatch(requestChargePoint(key, point, action)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
