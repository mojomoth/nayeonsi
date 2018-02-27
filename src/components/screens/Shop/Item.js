import React, { Component } from 'react';
import { View } from 'react-native';
import Button from 'atoms/Button';
import Label from 'atoms/Label';
import LogoIcon from 'atoms/Logo';
import styles from './styles';

export default class Item extends Component {
  render = () => (
    <Button style={styles.itemButton} onPress={this.props.onPress}>
      <View style={styles.itemLeft}>
        <View style={styles.itemPoint}>
          <LogoIcon style={styles.itemLogoIcon} />
          <Label style={styles.itemPointLabel} text={this.props.point} />
        </View>
        { this.props.discount !== null && this.props.discount !== '' ?
          <View style={styles.itemDiscount}>
            <View style={styles.itemDiscountBox}>
              <Label style={styles.itemDiscountLabel} text={this.props.discount} />
            </View>
          </View>
          : null 
        }
      </View>
      <View style={styles.itemRight}>
        <Label style={styles.itemCostLabel} text={this.props.cost} />
      </View>
    </Button>
  );
}
