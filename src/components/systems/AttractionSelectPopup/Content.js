import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import OutlineButton from 'atoms/OutlineButton';
import OutlineButtonLabel from 'atoms/OutlineButtonLabel';
import AddButton from './AddButton';
import styles from './styles';

export default class Content extends Component {
  buttons = () => {
    const elements = [];
    
    for (let node of this.props.data) {
      elements.push(
        <OutlineButton style={styles.attration} key={node.key} enabled={node.selected}>
          <OutlineButtonLabel style={styles.attrationLabel} enabled={node.selected}>{node.key}</OutlineButtonLabel>
        </OutlineButton>
      );
    }

    return elements;
  };

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          {this.buttons()}
          <View style={styles.buttonArea}>
            <AddButton text={'나만의 항목 추가'} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
