import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import OutlineButton from 'atoms/OutlineButton';
import OutlineButtonLabel from 'atoms/OutlineButtonLabel';
import AddButton from './AddButton';
import styles from './styles';

export default class Content extends Component {
  state = {
    mergedText: this.props.state,
  };

  onSelected = (items, selectedItem) => {
    const mergedText = this.mergeSelectedItem(items, selectedItem);

    this.setState({
      mergedText,
    });

    this.props.onSelected(mergedText);
  };

  mergeSelectedItem = (items, selectedItem) => {
    const selectedItems = [];
    for (const item of items) {
      if (item.key === selectedItem.key) {
        item.selected = !item.selected;
      }

      if (item.selected) {
        selectedItems.push(item.key);
      }
    }

    return selectedItems.join(', ');
  }

  buttons = () => {
    const elements = [];
    
    const selectedList = this.state.mergedText.split(', ');

    for (const item of this.props.data) {
      let isEnabled = item.selected;
      for (const selected of selectedList) {
        if (isEnabled) {
          break;
        }
        
        if (selected === item.key) {
          isEnabled = true;
          break;
        }
      }

      elements.push((
        <OutlineButton 
          style={styles.attration} 
          key={item.key} 
          enabled={isEnabled}
          onPress={() => this.onSelected(this.props.data, item)}
        >
          <OutlineButtonLabel 
            style={styles.attrationLabel} 
            enabled={item.selected}
          >
            {item.key}
          </OutlineButtonLabel>
        </OutlineButton>
      ));
    }

    return elements;
  };

  render = () => (
    <ScrollView 
      keyboardShouldPersistTaps="always"
      style={[styles.scroll, this.props.style]}
    >
      <View style={styles.content}>
        {this.buttons()}
        {/* <View style={styles.buttonArea}>
          <AddButton text={'나만의 항목 추가'} />
        </View> */}
      </View>
    </ScrollView>
  );
}
