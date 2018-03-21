import React, { Component } from 'react';
import { connect } from 'react-redux';
import Withdraw from 'screens/Withdraw';
import BasicPopup from 'popups/BasicPopup';
import { logoutUser, withdraw } from 'store/actions/auth';
import { startLandingScreen } from 'lib/navigator';

const CHECK_TEXT = '탈퇴합니다';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  state = {
    text: '',
  };

  componentWillReceiveProps = (nextProps) => { 
    if (nextProps.authState === 'WITHDRAW_COMPLETE') {
      this.openPopup('서비스 탈퇴', '회원 탈퇴가 정상적으로 이루어졌습니다.\n그 동안 서비스를 이용해주셔서 감사합니다.');
      this.props.initializeAuth();
      this.props.logoutUser();
      startLandingScreen();
    } else if (nextProps.authState === 'WITHDRAW_FAILED') {
      this.openPopup('서비스 탈퇴', '회원 탈퇴 오류\n관리자에게 문의하세요.'); 
    }
  };

  onBack = () => this.props.navigator.pop();
  onChangeText = text => this.setState({ text });

  onPress = () => {
    if (this.text !== CHECK_TEXT) {
      this.openPopup('서비스 탈퇴', '\'탈퇴합니다\' 라고 적어야 합니다.');
      return;
    }

    this.props.withdraw(this.props.uid, this.props.user.key, this.props.user);
  };

  onCloseModal = () => {
    this.props.navigator.dismissModal({ animationType: 'fade' });
  };

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
    <Withdraw
      navigator={this.props.navigator}
      onBack={this.onBack}
      onChangeText={this.onChangeText}
      onPress={this.onPress}
      text={this.state.text}
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
  logoutUser: () => dispatch(logoutUser()),
  withdraw: (uid, key, user) => dispatch(withdraw(uid, key, user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
