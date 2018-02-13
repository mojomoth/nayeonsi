import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import Screen from 'atoms/Screen';
import Header from './Header';
import TextBox from './TextBox';
import InputBox from './InputBox';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Chat extends Component {
  render = () => (
    <Screen style={styles.chat}>
      <Header />
      <View style={styles.boxes}>
        <FlatList
          style={styles.list}
          data={this.props.data}
          renderItem={({ item }) => 
            (<TextBox 
              style={styles.room} 
              isFace={item.isFace} 
              isTime={item.isTime} 
              type={item.type} 
              selected={item.selected} 
            />)
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <InputBox />
      </View>
    </Screen>
  );
}

Chat.defaultProps = {
  data: [
    { key: 'Devin', selected: false },
    { key: 'Jackson', type: 2, isFace: true, isTime:false, selected: true },
    { key: 'James', type:2, isTime:true, selected: false },
    { key: 'Joel', type:1, isTime:false, selected: false },
    { key: 'John', type:1, isTime:true, selected: false },
    { key: 'Jillian', type:2, isTime:true, selected: false },
    { key: 'Jimmy', selected: false },
    { key: 'Julie', selected: false },
    { key: 'Jackson', type: 2, isFace: true, isTime:false, selected: true },
    { key: 'James', type:2, isTime:true, selected: false },
    { key: 'Joel', type:1, isTime:false, selected: false },
    { key: 'John', type:1, isTime:true, selected: false },
    { key: 'Jillian', type:2, isTime:true, selected: false },
    { key: 'Jimmy', selected: false },
    { key: 'Julie', selected: false },
  ],
};

Chat.propTypes = {
};
