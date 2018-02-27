import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Menus from 'screens/Menus';
import { logoutUser } from 'store/actions/auth';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  onProfile = () => this.props.navigator.push({
    screen: 'ProfileSetting', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });
  
  onShop = () => this.props.navigator.push({
    screen: 'Shop', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });
  
  onSetting = () => this.props.navigator.push({
    screen: 'Setting', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });
  
  onNotice = () => this.props.navigator.push({
    screen: 'Notice', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });
  
  onEvent = () => this.props.navigator.push({
    screen: 'Event', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });

  onHelp = () => Alert.alert('내 메뉴', '준비중 입니다.');
  onSupport = () => Alert.alert('내 메뉴', '준비중 입니다.');

  getImage = () => ({ uri: this.props.user.images[0] });
  getPoint = () => `보유 포인트 ${this.props.point}`;

  render = () => (
    <Menus
      navigator={this.props.navigator}
      point={this.props.point}
      alarm={this.props.alarm}
      isLoading={this.props.isProgress}
      onLogout={this.onLogout}
      source={this.getImage()}
      name={this.props.user.nickname}
      pointLabel={this.getPoint()}
      onProfile={this.onProfile}
      onShop={this.onShop}
      onSetting={this.onSetting}
      onNotice={this.onNotice}
      onEvent={this.onEvent}
      onHelp={this.onHelp}
      onSupport={this.onSupport}
      onPoint={this.onShop}
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
