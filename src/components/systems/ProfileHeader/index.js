import React, { Component } from 'react';
import { View } from 'react-native';
import FaceBox from 'systems/FaceBox';
import Label from 'atoms/Label';
import Button from 'atoms/Button';
import BackIcon from 'icons/Back';
import MoreIcon from 'icons/More';
import PropTypes from 'prop-types';
import styles from './styles';

const FACE_SIZE = 40;

export default class ProfileHeader extends Component {
  right = () => (
    <View style={styles.iconBox}>
      <Button onPress={this.props.onMore}>
        <View style={styles.icon}>
          <MoreIcon style={styles.more} />
        </View>
      </Button>
    </View>
  );

  render = () => (
    <View style={styles.header}>
      <View style={styles.backBox}>
        <Button onPress={this.props.onBack}>
          <View style={styles.iconBack}>
            <BackIcon style={styles.back} />
          </View>
        </Button>
      </View>
      <View style={styles.faceBox}>
        <FaceBox size={FACE_SIZE} style={styles.face} source={this.props.source} />
        <Label style={styles.name} text={this.props.name} />
      </View>
      
      {this.right()}
    </View>
  );
}

ProfileHeader.defaultProps = {
  name: '헤더타이틀',
};

ProfileHeader.propTypes = {
  name: PropTypes.string,
};
