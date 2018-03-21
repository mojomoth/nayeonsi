import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Setting from 'screens/Setting';
import { logoutUser } from 'store/actions/auth';
import { startLandingScreen } from 'lib/navigator';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    isGPS: true,
    isAlarm: true,
    isMeet: true,
    isNoti: true,
    isToday: true,
    isLike: true,
    isAppeal: true,
    isConnect: true,
    isChat: true,
  };

  onBack = () => this.props.navigator.pop();

  onGPS = () => this.setState({ isGPS: !this.state.isGPS });
  onAlarm = () => this.setState({ isAlarm: !this.state.isAlarm });

  onMeet = () => this.setState({ isMeet: !this.state.isMeet });
  onNoti = () => this.setState({ isNoti: !this.state.isNoti });
  onToday = () => this.setState({ isToday: !this.state.isToday });
  onLike = () => this.setState({ isLike: !this.state.isLike });
  onAppeal = () => this.setState({ isAppeal: !this.state.isAppeal });
  onConnect = () => this.setState({ isConnect: !this.state.isConnect });
  onChat = () => this.setState({ isChat: !this.state.isChat });

  onLogout = () => {
    this.props.logoutUser();
    startLandingScreen();
  };

  onDrop = () => this.props.navigator.push({
    screen: 'Withdraw', 
    passProps: this.props.navigator,
    overrideBackPress: true,
  });

  onAgreement = () => Alert.alert('설정', '준비중 입니다.');
  onPersonal = () => Alert.alert('설정', '준비중 입니다.');
  onLocationAgreement = () => Alert.alert('설정', '준비중 입니다.');

  render = () => (
    <Setting
      navigator={this.props.navigator}
      alarm={this.props.alarm}
      alarmCount={this.props.alarmCount}
      onBack={this.onBack}
      onGPS={this.onGPS}
      isGPS={this.state.isGPS}
      onAlarm={this.onAlarm}
      isAlarm={this.state.isAlarm}
      onMeet={this.onMeet}
      isMeet={this.state.isMeet}
      onNoti={this.onNoti}
      isNoti={this.state.isNoti}
      onToday={this.onToday}
      isToday={this.state.isToday}
      onLike={this.onLike}
      isLike={this.state.isLike}
      onAppeal={this.onAppeal}
      isAppeal={this.state.isAppeal}
      onConnect={this.onConnect}
      isConnect={this.state.isConnect}
      onChat={this.onChat}
      isChat={this.state.isChat}
      onLogout={this.onLogout}
      onDrop={this.onDrop}
      onAgreement={this.onAgreement}
      onPersonal={this.onPersonal}
      onLocationAgreement={this.onLocationAgreement}
      email={this.props.user.email}
      facebook="연동안됨"
      password="변경"
      phone={this.props.user.phone}
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
