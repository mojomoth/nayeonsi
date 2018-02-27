import React, { Component } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Screen from 'atoms/Screen';
import SubHeader from 'systems/SubHeader';
import Label from 'atoms/Label';
import GPS from './GPS';
import Alarm from './Alarm';
import SwitchItem from './SwitchItem';
import LabelItem from './LabelItem';
import SubItem from './SubItem';
import styles from './styles';

export default class Setting extends Component {
  render = () => (
    <Screen style={styles.screen}>
      <SubHeader
        style={styles.header}
        isUnderline={false}
        title={this.props.title}
        onBack={this.props.onBack}
      />
      <ScrollView 
        contentContainerStyle={styles.scroll}
        removeClippedSubviews
      >
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <GPS onPress={this.props.onGPS} isActivate={this.props.isGPS} />
          </View>
          <View style={styles.topRight}>
            <Alarm onPress={this.props.onAlarm} isActivate={this.props.isAlarm} />
          </View>
        </View>

        <View style={styles.box}>
          <SwitchItem text="소개" onPress={this.props.onMeet} isActivate={this.props.isMeet} />
        </View>
        
        <Label style={styles.infoLabel} text="비활성 시 소개를 받을 수 없으며, 상대방에게도 소개되지 않습니다." />
        
        <View style={styles.box}>
          <SwitchItem text="알림 소리 및 진동" onPress={this.props.onNoti} isActivate={this.props.isNoti} />
          <SwitchItem text="오늘의 연애 알림" onPress={this.props.onToday} isActivate={this.props.isToday} />
          <SwitchItem text="좋아요 알림" onPress={this.props.onLike} isActivate={this.props.isLike} />
          <SwitchItem text="어필 알림" onPress={this.props.onAppeal} isActivate={this.props.isAppeal} />
          <SwitchItem text="연결 성사 알림" onPress={this.props.onConnect} isActivate={this.props.isConnect} />
          <SwitchItem text="대화 알림" onPress={this.props.onChat} isActivate={this.props.isChat} />
        </View>

        <View style={styles.box}>
          <LabelItem text="이메일" onPress={this.props.onEmail}>
            <Label style={styles.email} text={this.props.email} />
          </LabelItem>

          <LabelItem text="페이스북" onPress={this.props.onFacebook} label={this.props.connect}>
            <Label style={styles.facebook} text={this.props.facebook} />
          </LabelItem>

          <LabelItem text="비밀번호" onPress={this.props.onPassword} label={this.props.password}>
            <Label style={styles.password} text={this.props.password} />
          </LabelItem>

          <LabelItem text="전화번호" onPress={this.props.onPhone} label={this.props.phone}>
            <Label style={styles.phone} text={this.props.phone} />
          </LabelItem>
        </View>

        <View style={styles.box}>
          <LabelItem text="로그아웃" isFocus onPress={this.props.onLogout} />
          <LabelItem text="서비스 탈퇴" onPress={this.props.onDrop} />
        </View>

        <View style={styles.box}>
          <SubItem text="이용약관" onPress={this.props.onAgreement} />
          <SubItem text="개인정보 취급방침" onPress={this.props.onPersonal} />
          <SubItem text="위치기반 서비스 약관" onPress={this.props.onLocationAgreement} />
        </View>
        
        <View style={styles.versionBox}>
          <Label style={styles.versionLabel} text={this.props.version} />
        </View>
      </ScrollView>
    </Screen>
  );
}

Setting.defaultProps = {
  title: '설정',
  email: 'abc@naver.com',
  facebook: '연동됨',
  password: '변경',
  phone: '010-1234-1234',
  version: 'Version 1.0.0',
  onBack: () => {},
};

Setting.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  facebook: PropTypes.string,
  password: PropTypes.string,
  phone: PropTypes.string,
  version: PropTypes.string,
  onBack: PropTypes.func,
};
