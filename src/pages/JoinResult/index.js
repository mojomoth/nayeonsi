import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import JoinResult from 'screens/JoinResult';
import { getUser } from 'store/actions/user';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    backButtonHidden: true,
  };

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => false);
  }

  onBack = () => this.props.navigator.pop();

  onPress = () => {
    this.props.navigator.popToRoot();
    this.props.getUser(this.props.uid);
  };

  render = () => (
    <JoinResult
      onBack={this.onBack}
      onPress={this.onPress}
    />
  );
}

const mapStateToProps = state => ({
  uid: state.auth.uid,
});

const mapDispatchToProps = dispatch => ({
  getUser: uid => dispatch(getUser(uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
