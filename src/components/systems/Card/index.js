import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import SecretIcon from 'icons/Secret';
import CrownIcon from 'icons/Crown';
import LocationIcon from 'icons/Location';
import TrashIcon from 'icons/Trash';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Card extends Component {
  render = () => (
    <View style={[styles.card, this.props.style]}>
      <Button onPress={this.props.onPress}>
        <View style={styles.pictureBox}>
          <Image 
            style={styles.picture} 
            resizeMethod="resize"
            source={this.props.source} 
          />
        </View>
      </Button>

      <View style={styles.iconBox} pointerEvents="none">
        { this.props.isSecret ? 
          <View style={styles.icon}><SecretIcon style={styles.secret} type="small" /></View> 
        : null }
        { this.props.isTop ? 
          <View style={styles.icon}><CrownIcon style={styles.crown} type="small" /></View> 
        : null }
        { this.props.isNearby ? 
          <View style={styles.icon}><LocationIcon style={styles.location} type="small" /></View> 
        : null }
      </View>

      <Label style={styles.nameLabel} text={this.props.name} />
      <Label style={styles.infoLabel} text={this.props.info} />

      { this.props.isRemove ? 
        <Button onPress={this.props.onDelete} style={styles.trashButton}>
          <View style={styles.trashBox} />
          <TrashIcon style={styles.trash} />
        </Button>
        : null
      }
    </View>
  );
}

Card.defaultProps = {
  name: '프로필이름',
  info: '00세, 서울',
  isSecret: true,
  isTop: true,
  isNearby: true,
  isRemove: false,
  source: null,
  onPress: () => {},
};

Card.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
  isSecret: PropTypes.bool,
  isTop: PropTypes.bool,
  isNearby: PropTypes.bool,
  isRemove: PropTypes.bool,
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }), 
    PropTypes.number]),
  onPress: PropTypes.func,
};
