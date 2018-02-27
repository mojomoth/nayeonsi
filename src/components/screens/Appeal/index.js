import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Label from 'atoms/Label';
import Button from 'atoms/Button';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import SecretIcon from 'icons/Secret';
import PaperPlaneIcon from 'icons/PaperPlane';
import HeartIcon from 'icons/Heart';
import MainContainer from 'systems/MainContainer';
import PropTypes from 'prop-types';
import styles from './styles';

const image = require('assets/images/icLocationRandom.png');

export default class Appeal extends Component {
  render = () => (
    <MainContainer 
      title={this.props.title}
      alarm={this.props.alarm}
      point={this.props.point}
      alarmCount={this.props.alarmCount}
      onAlarm={this.props.onAlarm}
      onPoint={this.props.onPoint}
      navigator={this.props.navigator} 
      isLoading={this.props.isLoading}
      menu={2}
      isUnderline
    >
      <View style={styles.content}>
        <View style={styles.imageBox}>
          <Image source={image} style={styles.image} />
        
          <View style={styles.textBox1}>
            <Label style={[styles.text1, styles.black]} text={'현재 위치는'} />
          </View>
          <View style={styles.textBox2}>
            <Label style={[styles.text2, styles.red]} text={this.props.location} />
            <Label style={[styles.text2, styles.black]} text={'입니다.'} />
          </View>
          <View style={styles.textBox3}>
            <Label style={[styles.text3, styles.gray]} text={'검색 된 주변 사람은'} />
            <Label style={[styles.text3, styles.red]} text={this.props.userCount} />
            <Label style={[styles.text3, styles.gray]} text={'명 입니다.'} />
          </View>
        </View>
        <View style={styles.buttonBox}>
          <FilledButton style={styles.appealButton} onPress={this.props.onAppeal}>
            <PaperPlaneIcon style={styles.appealIcon} />
            <FilledButtonLabel style={styles.appealLabel}>{this.props.appealButton}</FilledButtonLabel>
          </FilledButton>

          <FilledButton style={styles.likeButton} onPress={this.props.onLike}>
            <HeartIcon style={styles.likeIcon} type="small" />
            <FilledButtonLabel style={styles.likeLabel}>{this.props.likeButton}</FilledButtonLabel>
          </FilledButton>

          <FilledButton style={styles.secretButton} onPress={this.props.onSecret}>
            <SecretIcon style={styles.secretIcon} type="big" />
            <FilledButtonLabel style={styles.secretLabel}>{this.props.secretButton}</FilledButtonLabel>
          </FilledButton>

          <Button onPress={this.props.onAbout}>
            <Label style={styles.aboutAppeal} text={'내 주변 어필이 무엇인가요?'} />
          </Button>
        </View>
      </View>
    </MainContainer>
  );
}

Appeal.defaultProps = {
  title: '내 주변 어필',
  alarm: '',
  point: 2155,
  alarmCount: 10,
  onAlarm: () => {},
  onPoint: () => {},
  location: '서울시 용산구 이태원동',
  userCount: 20,
  secretButton: '23명에게 시크릿 어필',
  appealButton: '23명에게 어필',
  likeButton: '23명에게 좋아요',
};

Appeal.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  point: PropTypes.number,
  alarmCount: PropTypes.number,
  onAlarm: PropTypes.func,
  onPoint: PropTypes.func,
  location: PropTypes.string,
  userCount: PropTypes.number,
  secretButton: PropTypes.string,
  appealButton: PropTypes.string,
  likeButton: PropTypes.string,
};
