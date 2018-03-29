import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import Setting from 'screens/Setting';
import BasicPopup from 'popups/BasicPopup';
import PasswordChangePopup from 'popups/PasswordChangePopup';
import { logoutUser, changePassword, initializeAuth } from 'store/actions/auth';
import { fixSetting } from 'store/actions/app';
import { startLandingScreen } from 'lib/navigator';
import { 
  subscribeToday,
  subscribeLike,
  subscribeAppeal,
  subscribeMatch,
  subscribeMessage,
  unsubscribeToday,
  unsubscribeLike,
  unsubscribeAppeal,
  unsubscribeMatch,
  unsubscribeMessage,
  unsubscribe,
} from 'lib/fcm';

const MIN_PASSWORD_LENGTH = 6;

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    isGPS: true,
    isAlarm: true,
    isMeet: this.props.isMeet,
    isNoti: this.props.isNoti,
    isToday: this.props.isTodayNoti,
    isLike: this.props.isLikeNoti,
    isAppeal: this.props.isAppealNoti,
    isConnect: this.props.isMatchNoti,
    isChat: this.props.isMessageNoti,
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

  onBack = () => {
    this.props.fixSetting(
      this.props.user.key,
      {
        isMeet: this.state.isMeet,
        isNoti: this.state.isNoti,
        isTodayNoti: this.state.isToday,
        isLikeNoti: this.state.isLike,
        isAppealNoti: this.state.isAppeal,
        isMatchNoti: this.state.isConnect,
        isMessageNoti: this.state.isChat,
      },
    );

    this.props.navigator.pop();
  };

  onGPS = () => this.setState({ isGPS: !this.state.isGPS });
  onAlarm = () => this.setState({ isAlarm: !this.state.isAlarm });

  onMeet = () => {
    this.setState({ isMeet: !this.state.isMeet });
  };

  onNoti = () => {
    this.setState({ isNoti: !this.state.isNoti });
  };

  onToday = () => {
    this.setState({ isToday: !this.state.isToday });

    const { key } = this.props.user;
    if (!this.state.isToday) subscribeToday(key);
    else unsubscribeToday(key);
  };

  onLike = () => {
    this.setState({ isLike: !this.state.isLike });

    const { key } = this.props.user;
    if (!this.state.isLike) subscribeLike(key);
    else unsubscribeLike(key);
  };

  onAppeal = () => {
    this.setState({ isAppeal: !this.state.isAppeal });

    const { key } = this.props.user;
    if (!this.state.isAppeal) subscribeAppeal(key);
    else unsubscribeAppeal(key);
  };

  onConnect = () => {
    this.setState({ isConnect: !this.state.isConnect });

    const { key } = this.props.user;
    if (!this.state.isConnect) subscribeMatch(key);
    else unsubscribeMatch(key);
  };

  onChat = () => {
    this.setState({ isChat: !this.state.isChat });

    const { key } = this.props.user;
    if (!this.state.isChat) subscribeMessage(key);
    else unsubscribeMessage(key);
  };

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
    const { key } = this.props.user;
    
    unsubscribe(key);
    unsubscribeToday(key);
    unsubscribeLike(key);
    unsubscribeAppeal(key);
    unsubscribeMatch(key);
    unsubscribeMessage(key);

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
  isMeet: state.app.isMeet,
  isNoti: state.app.isNoti,
  isTodayNoti: state.app.isTodayNoti,
  isLikeNoti: state.app.isLikeNoti,
  isAppealNoti: state.app.isAppealNoti,
  isMatchNoti: state.app.isMatchNoti,
  isMessageNoti: state.app.isMessageNoti,
});

const mapDispatchToProps = dispatch => ({
  initializeAuth: () => dispatch(initializeAuth()),
  logoutUser: () => dispatch(logoutUser()),
  fixSetting: (key, data) => dispatch(fixSetting(key, data)),
  changePassword: (password, newPassword) => dispatch(changePassword(password, newPassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
