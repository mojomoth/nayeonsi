import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Screen from 'atoms/Screen';
import SubHeader from 'systems/SubHeader';
import Point from './Point';
import Item from './Item';
import styles from './styles';

export default class Shop extends Component {
  render = () => (
    <Screen style={styles.screen}>
      <SubHeader
        style={styles.header}
        isUnderline
        title={this.props.title}
        onBack={this.props.onBack}
      />
      <Point 
        pointText={this.props.point}
        pointInfoText="보유 포인트"
      />
      <ScrollView 
        contentContainerStyle={styles.scroll}
        removeClippedSubviews
      >
        <Item point="850" discount="40% off" cost="$ 76.99" onPress={() => this.props.onPress(850)} />
        <Item point="400" discount="30% off" cost="$ 38.49" onPress={() => this.props.onPress(400)} />
        <Item point="170" discount="20% off" cost="$ 17.59" onPress={() => this.props.onPress(170)} />
        <Item point="80" discount="15% off" cost="$ 8.99" onPress={() => this.props.onPress(80)} />
        <Item point="35" discount="" cost="$ 4.49" onPress={() => this.props.onPress(35)} />
      </ScrollView>
    </Screen>
  );
}

Shop.defaultProps = {
  title: '상점',
  onBack: () => {},
  point: 120,
};

Shop.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func,
  point: PropTypes.number,
};
