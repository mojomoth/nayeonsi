import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import MainContainer from 'systems/MainContainer';
import InputChecker from 'systems/InputChecker';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import Label from 'atoms/Label';
import styles from './styles';

const image = require('assets/images/icByebye.png');

export default class Widthdraw extends Component {
  render = () => (
    <MainContainer 
      title={this.props.title}
      alarm=""
      alarmCount={0}
      navigator={this.props.navigator}  
      isLoading={this.props.isLoading}
      menu={4}
      isUnderline
      isNavigation={false}
      isMain={false}
      onBack={this.props.onBack}
    >
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <Label style={styles.title} text="서비스를 정말로 탈퇴 하실 건가요?" />
        <Label style={styles.text} text={'탈퇴를 진행하시면 사용 중인 계정의 모든 정보와\n구매 획득한 포인트가 삭제되고 복구 하실 수 없습니다.\n계속 진행을 원하시면 빈칸에 \'탈퇴합니다\'를 적고 탈퇴해주세요'} />
        <Label style={styles.text} text={'그동안 서비스를 이용해주셔서 감사합니다.\n더 노력하는 나연이 되겠습니다.'} />

        <InputChecker 
          style={styles.input}
          label="탈퇴합니다"
          text={this.props.text}
          alarm={this.props.alarm}
          onBlur={this.props.onBlur} 
          onFocus={this.props.onFocus} 
          onChangeText={this.props.onChangeText} 
          isAlarm={this.props.isAlarm}
          isComplete={this.props.isComplete}
          isFocus={this.props.isFocus}
          isButton={false}
        />
      </View>
      <View style={styles.bottom}>
        <FilledButton style={styles.button} onPress={this.props.onPress}>
          <FilledButtonLabel style={styles.buttonLabel}>
            {'탈퇴하기'}
          </FilledButtonLabel>
        </FilledButton>
      </View>
    </MainContainer>
  );
}

Widthdraw.defaultProps = {
  title: '서비스 탈퇴',
  onBack: () => {},
};

Widthdraw.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func,
};
