import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import SelectOption from 'atoms/SelectOption';
import styles from './styles';

export default class Content extends Component {
  render() {
    return (
      <View style={styles.content}>
        <FlatList
          style={styles.list}
          data={this.props.data}
          renderItem={({ item }) => 
            <SelectOption style={styles.selectOption} text={item.key} selected={item.selected} />}
        />
      </View>
    );
  }
}
