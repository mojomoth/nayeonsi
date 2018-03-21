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
      isLoading={this.props.isLoading}
      menu={4}
      isUnderline={false}
      isNavigation={false}
      isMain={false}
      onBack={this.props.onBack}
    >
      <InfoHeader isModifying={this.props.isModifying} />
      <View style={styles.screen}>
        <Album  
          picture1={this.props.picture1}
          picture2={this.props.picture2}
          picture3={this.props.picture3}
          picture4={this.props.picture4}
          picture5={this.props.picture5}
          picture6={this.props.picture6}
          onPress1={this.props.onPress1}
          onPress2={this.props.onPress2}
          onPress3={this.props.onPress3}
          onPress4={this.props.onPress4}
          onPress5={this.props.onPress5}
          onPress6={this.props.onPress6}
          onDelete1={this.props.onDelete1}
          onDelete2={this.props.onDelete2}
          onDelete3={this.props.onDelete3}
          onDelete4={this.props.onDelete4}
          onDelete5={this.props.onDelete5}
          onDelete6={this.props.onDelete6}
        />
        <Profile 
          nickname={this.props.nickname}
          year={this.props.year}
          sex={this.props.sex}
          tall={this.props.tall}
          shape={this.props.shape}
          blood={this.props.blood}
          religion={this.props.religion}
          smoke={this.props.smoke}
          drink={this.props.drink}
          phone={this.props.phone}
        />
        <Appeal 
          location={this.props.location}
          school={this.props.school}
          job={this.props.job}
          attraction={this.props.attraction}
          character={this.props.character}
          like={this.props.like}
          want={this.props.want}
          play={this.props.play}
          message={this.props.message}
        />
        <View style={styles.content}>
          <FilledButton 
            style={styles.button} 
            onPress={this.props.onPress}
            enabled={this.props.isModifying === false}
          >
            <FilledButtonLabel style={styles.buttonLabel}>
              {'프로필 수정'}
            </FilledButtonLabel>
          </FilledButton>
        </View>
        { this.props.isModifying ? <View style={styles.cover} /> : null }
      </View>
    </MainContainer>
  );
}

ProfileSetting.defaultProps = {
  title: '프로필',
  alarm: '',
  onBack: () => {},
};

ProfileSetting.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  onBack: PropTypes.func,
};
