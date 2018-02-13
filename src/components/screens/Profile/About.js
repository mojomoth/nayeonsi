import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Label from 'atoms/Label';
import AboutLabel from './AboutLabel';
import styles from './styles';

export default class About extends Component {
  render = () => (
    <View style={styles.about}>
      <Label style={styles.messageLabel} text={'\"' + this.props.message + '\"'} />
      <AboutLabel label={this.props.aboutTitle}>
        <Label style={styles.aboutText} text={'키는 '} />
        <Label style={styles.aboutValue} text={this.props.tall} />
        <Label style={styles.aboutText} text={' 이고, '} />
        <Label style={styles.aboutValue} text={this.props.shape} />
        <Label style={styles.aboutText} text={' 체형입니다.'} />
      </AboutLabel>
      <AboutLabel label={this.props.jobTitle}>
        <Label style={styles.aboutValue} text={this.props.job} />
        <Label style={styles.aboutText} text={' 입니다.'} />
      </AboutLabel>
      <AboutLabel label={this.props.schoolTitle}>
        <Label style={styles.aboutValue} text={this.props.school} />
        <Label style={styles.aboutText} text={' 에서 공부했어요.'} />
      </AboutLabel>
      <AboutLabel label={this.props.religionTitle}>
        <Label style={styles.aboutValue} text={this.props.religion} />
        <Label style={styles.aboutText} text={' 이구요'} />
      </AboutLabel>
      <AboutLabel label={this.props.drinkTitle}>
        <Label style={styles.aboutText} text={'술은 '} />
        <Label style={styles.aboutValue} text={this.props.drink} />
        <Label style={styles.aboutText} text={' 마시는 편 이고,'} />
      </AboutLabel>
      <AboutLabel label={this.props.smokeTitle}>
        <Label style={styles.aboutValue} text={this.props.smoke} />
        <Label style={styles.aboutText} text={'입니다.'} />
      </AboutLabel>
      <AboutLabel label={this.props.bloodTitle}>
        <Label style={styles.aboutText} text={'혈액형은 '} />
        <Label style={styles.aboutValue} text={this.props.blood} />
        <Label style={styles.aboutText} text={'이예요.'} />
      </AboutLabel>
    </View>
  );
}

About.defaultProps = {
  message: '헤더타이틀',
  aboutTitle: '저는요',
  jobTitle: '직업',
  schoolTitle: '학교',
  religionTitle: '종교',
  drinkTitle: '음주',
  smokeTitle: '흡연',
  bloodTitle: '혈액형',
  tall: '저는요',
  shape: '저는요',
  job: '직업',
  school: '학교',
  religion: '종교',
  drink: '음주',
  smoke: '흡연',
  blood: '혈액형',
};

About.propTypes = {
  message: PropTypes.string,
  aboutTitle: PropTypes.string,
  jobTitle: PropTypes.string,
  schoolTitle: PropTypes.string,
  religionTitle: PropTypes.string,
  drinkTitle: PropTypes.string,
  smokeTitle: PropTypes.string,
  bloodTitle: PropTypes.string,
  tall: PropTypes.string,
  shape: PropTypes.string,
  job: PropTypes.string,
  school: PropTypes.string,
  religion: PropTypes.string,
  drink: PropTypes.string,
  smoke: PropTypes.string,
  blood: PropTypes.string,
};
