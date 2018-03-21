import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import Label from 'atoms/Label';
import OutlineButton from 'atoms/OutlineButton';
import OutlineButtonLabel from 'atoms/OutlineButtonLabel';
import FaceBox from 'systems/FaceBox';
import MainContainer from 'systems/MainContainer';
import ShopIcon from 'icons/Shop';
import GearIcon from 'icons/Gear';
import LoudSpeakerIcon from 'icons/LoudSpeaker';
import PresentIcon from 'icons/Present';
import ExclamationMarkIcon from 'icons/ExclamationMark';
import MailIcon from 'icons/Mail';
import Menu from './Menu';
import styles from './styles';

const SIZE = 100;

export default class Menus extends Component {
  render = () => (
    <MainContainer 
      title={this.props.title}
      alarm={this.props.alarm}
      point={this.props.point}
      alarmCount={this.props.alarmCount}
      onAlarm={this.props.onAlarm}
      onPoint={this.props.onPoint}
      navigator={this.props.navigator} 
      menu={4}
      isScroll={false}
      isLoading={this.props.isLoading}
      isUnderline
    >
      <ScrollView style={styles.content} removeClippedSubviews>
        <View style={styles.profileBox}>
          <FaceBox size={SIZE} style={styles.face} source={this.props.source} />
          <Label style={styles.profileName} text={this.props.name} />
          <OutlineButton style={styles.profileButton} onPress={this.props.onProfile}>
            <OutlineButtonLabel style={styles.profileButtonLabel}>프로필 보기</OutlineButtonLabel>
          </OutlineButton>
        </View>
        <View style={styles.menuBox}>
          <Menu 
            onPress={this.props.onShop} 
            text="상점"
            subText={this.props.pointLabel}
          >
            <ShopIcon styles={styles.menuIcon} />
          </Menu>
          <Menu onPress={this.props.onSetting} text="설정"><GearIcon styles={styles.menuIcon} type="whitesmall" /></Menu>
          <Menu onPress={this.props.onNotice} text="공지사항"><LoudSpeakerIcon style={styles.menuIcon} type="whitesmall" /></Menu>
          <Menu onPress={this.props.onEvent} text="이벤트"><PresentIcon /></Menu>
          <Menu onPress={this.props.onHelp} text="도움말"><ExclamationMarkIcon /></Menu>
          <Menu onPress={this.props.onSupport} text="문의하기"><MailIcon type="whitesmall" /></Menu>
        </View>
      </ScrollView>
    </MainContainer>
  );
}

Menus.defaultProps = {
  title: '내 메뉴',
  alarm: '',
  point: 2155,
  alarmCount: 10,
  onAlarm: () => {},
  onPoint: () => {},
  onProfile: () => {},
  onShop: () => {},
  onSetting: () => {},
  onNotice: () => {},
  onEvent: () => {},
  onHelp: () => {},
  onSupport: () => {},
  name: '회원이름',
  pointLabel: '보유 포인트 100',
};

Menus.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  point: PropTypes.number,
  alarmCount: PropTypes.number,
  onAlarm: PropTypes.func,
  onPoint: PropTypes.func,
  onProfile: PropTypes.func,
  onShop: PropTypes.func,
  onSetting: PropTypes.func,
  onNotice: PropTypes.func,
  onEvent: PropTypes.func,
  onHelp: PropTypes.func,
  onSupport: PropTypes.func,
  name: PropTypes.string,
  pointLabel: PropTypes.string,
};
