import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import MainContainer from 'systems/MainContainer';
import FilledButton from 'atoms/FilledButton';
import FilledButtonLabel from 'atoms/FilledButtonLabel';
import InfoHeader from './InfoHeader';
import Album from './Album';
import Profile from './Profile';
import Appeal from './Appeal';
import styles from './styles';

export default class ProfileSetting extends Component {
  render = () => (
    <MainContainer 
      title={this.props.title}
      alarm={this.props.alarm}
      alarmCount={this.props.alarmCount}
      navigator={this.props.navigator} 
      menu={4}
      isUnderline={false}
      isNavigation={false}
      isMain={false}
      onBack={this.props.onBack}
    >
      <View style={styles.screen}>
        <InfoHeader />
        <Album />
        <Profile />
        <Appeal />
        <View style={styles.content}>
          <FilledButton style={styles.button} onPress={this.props.onPress}>
            <FilledButtonLabel style={styles.buttonLabel}>
              {'프로필 수정'}
            </FilledButtonLabel>
          </FilledButton>
        </View>
      </View>
    </MainContainer>
  );
}

ProfileSetting.defaultProps = {
  title: '프로필수정',
  alarm: '',
  onBack: () => {},
};

ProfileSetting.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  onBack: PropTypes.func,
};
