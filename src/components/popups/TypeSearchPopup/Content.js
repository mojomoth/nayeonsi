import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TypeSearch from './TypeSearch';
import styles from './styles';

export default class Content extends Component {
  render = () => (
    <View style={styles.content}>
      <FlatList
        style={styles.list}
        data={this.props.data}
        renderItem={({ item }) => 
          <TypeSearch style={styles.selectOption} text={item.key} onPress={() => this.props.onPress(item)} />}
      />
    </View>
  );
}
