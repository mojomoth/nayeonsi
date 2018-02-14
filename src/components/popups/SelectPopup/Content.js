import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import SelectOption from 'atoms/SelectOption';
import styles from './styles';

export default class Content extends Component {
  render = () => (
    <View style={[styles.content, this.props.style]}>
      <FlatList
        keyboardShouldPersistTaps="always"
        style={styles.list}
        data={this.props.data}
        renderItem={({ item }) => (
          <SelectOption 
            style={styles.selectOption} 
            text={item.key} 
            selected={item.selected} 
            onPress={() => this.props.onSelected(item)}
          />
        )}
      />
    </View>
  );
}
