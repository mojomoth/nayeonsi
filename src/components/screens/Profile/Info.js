import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Label from 'atoms/Label';
import LocationIcon from 'icons/Location';
import CrownIcon from 'icons/Crown';
import LikeButton from './LikeButton';
import InfoIcon from './InfoIcon';
import styles from './styles';

export default class Info extends Component {
  render = () => (
    <View style={styles.info}>
      <View stlye={styles.infoLabels}>
        <Label style={styles.nameLabel} text={this.props.name} />
        <Label style={styles.infoLabel} text={this.props.info1} />
        <Label style={styles.infoLabel} text={this.props.info2} />
      </View>
      <View style={styles.rightSide}>
        <LikeButton />
        <View style={styles.innerIcons}>
          <InfoIcon style={styles.locationIcon}>
            <LocationIcon style={[styles.innerIcon, styles.locationIcon]} />
          </InfoIcon>
          <InfoIcon style={styles.crownIcon}>
            <CrownIcon style={[styles.innerIcon, styles.crownIcon]} />
          </InfoIcon>
        </View>
      </View>
    </View>
  );
}

Info.defaultProps = {
  name: '헤더타이틀',
  info1: '정보1',
  info2: '정보2',
};

Info.propTypes = {
  name: PropTypes.string,
  info1: PropTypes.string,
  info2: PropTypes.string,
};
