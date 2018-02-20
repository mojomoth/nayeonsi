import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import Screen from 'atoms/Screen';
import Loading from 'systems/Loading';
import Header from './Header';
import TextBox from './TextBox';
import InputBox from './InputBox';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Chat extends Component {
  render = () => (
    <Screen style={styles.chat}>
      <Header 
        onBack={this.props.onBack}
        onMore={this.props.onMore}
        source={this.props.source}
        name={this.props.name}
      />
      <View style={styles.boxes}>
        <FlatList
          inverted
          style={styles.list}
          data={this.props.data}
          renderItem={({ item }) => 
            (<TextBox 
              key={item.key}
              style={styles.room} 
              isFace={item.isFace} 
              isTime={item.isTime} 
              text={item.text}
              time={item.time}
              source={item.source}
              type={item.type} 
              selected={item.selected} 
            />)
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <InputBox  
          onPress={this.props.onWrite}
          text={this.props.text}  
          onChangeText={this.props.onChangeText}
          onFocus={this.props.onFocusText}
          onBlur={this.props.onBlurText}
        />
      </View>
      { this.props.isLoading ? <Loading /> : null }
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
