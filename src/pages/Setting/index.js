import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Setting from 'screens/Setting';
import BasicPopup from 'popups/BasicPopup';
import PasswordChangePopup from 'popups/PasswordChangePopup';
import { logoutUser, changePassword, initializeAuth } from 'store/actions/auth';
import { startLandingScreen } from 'lib/navigator';
import { unsubscribe } from 'lib/fcm';

const MIN_PASSWORD_LENGTH = 6;

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

  componentWillReceiveProps = (nextProps) => { 
    if (nextProps.authState === 'CHANGE_PASSWORD_FAILED') {
      this.openPopup('비밀번호변경', '비밀번호를 다시 확인하세요.');
      this.props.initializeAuth();
    } else if (nextProps.authState === 'CHANGE_PASSWORD_COMPLETE') {
      this.openPopup('비밀번호변경', '비밀번호가 변경되었습니다.');
      this.props.initializeAuth();
    }
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

  onCloseModal = () => {
    this.props.navigator.dismissModal({ animationType: 'fade' });
  };

  onChangePassword = () => {
    if (this.currentPassword === '' || this.currentPassword === undefined) {
      this.openPopup('비밀번호변경', '현재 비밀번호를 입력하세요.');
      return;
    } else if (this.newPassword === '' || this.newPassword === undefined) {
      this.openPopup('비밀번호변경', '변경할 비밀번호를 입력하세요.');
      return;
    } else if (this.newPassword.length < MIN_PASSWORD_LENGTH) {
      this.openPopup('비밀번호변경', `변경할 비밀번호는 ${MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`);
      return;
    } else if (this.repeatPassword === '' || this.repeatPassword === undefined) {
      this.openPopup('비밀번호변경', '변경할 비밀번호를 확인해주세요.');
      return;
    } else if (this.newPassword !== this.repeatPassword) {
      this.openPopup('비밀번호변경', '변경할 비밀번호가 맞지 않습니다.');
      return;
    }

    this.props.changePassword(this.currentPassword, this.newPassword);
    this.onCloseModal();
  };

  onChangeCurrentPassword = (text) => {
    this.currentPassword = text;
  };

  onChangeNewPassword = (text) => {
    this.newPassword = text;
  };

  onChangeRepeatPassword = (text) => {
    this.repeatPassword = text;
  };

  onPassword = () => this.props.navigator.showModal({
    screen: 'Modal', 
    animationType: 'fade',
    passProps: {
      navigator: this.props.navigator,
      popup: <PasswordChangePopup 
        onConfirm={this.onChangePassword} 
        onCancel={this.onCloseModal} 
        onChangeCurrentPassword={this.onChangeCurrentPassword}
        onChangeNewPassword={this.onChangeNewPassword}
        onChangeRepeatPassword={this.onChangeRepeatPassword}
      />,
    },
  });

  onLogout = () => {
    this.props.logoutUser();
    unsubscribe(this.props.uid);
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

  openPopup = (title, text) => this.props.navigator.showModal({
    screen: 'Modal', 
    animationType: 'fade',
    passProps: {
      popup: <BasicPopup 
        title={title}
        text={text}
        buttonText="확인"
        onPress={this.onCloseModal}
      />,
    },
  });

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
      onPassword={this.onPassword}
      email={this.props.user.email}
      facebook="연동안됨"
      password="변경"
      phone={this.props.user.phone}
      isLoading={this.props.isProgress}
    />
  );
}

const mapStateToProps = state => ({
  point: state.user.point,
  user: state.user.user,
  uid: state.auth.uid,
  authState: state.auth.state,
  isProgress: state.auth.isProgress,
});

const mapDispatchToProps = dispatch => ({
  initializeAuth: () => dispatch(initializeAuth()),
  logoutUser: () => dispatch(logoutUser()),
  changePassword: (password, newPassword) => dispatch(changePassword(password, newPassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
