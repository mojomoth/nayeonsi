import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import MainContainer from 'systems/MainContainer';
import Article from './Article';
import styles from './styles';

export default class Notice extends Component {
  render = () => (
    <MainContainer 
      title={this.props.title}
      alarm={this.props.alarm}
      alarmCount={this.props.alarmCount}
      navigator={this.props.navigator}   
      isLoading={this.props.isLoading}
      menu={4}
      isUnderline
      isScroll={false}
      isMain={false}
      onBack={this.props.onBack}
    >
      <View style={styles.content}>
        <FlatList
          removeClippedSubviews
          style={styles.list}
          columnWrapperStyle={styles.listContainer}
          data={this.props.data}
          renderItem={({ item }) => (
            <Article
              title={item.title}
              text={item.text}
              time={item.time}
            />)}
        />
      </View>
    </MainContainer>
  );
}

Notice.defaultProps = {
  title: '공지사항',
  alarm: '',
  onBack: () => {},
  data: [
    { key: 'Devin', selected: false },
    { key: 'Jackson', type: 2, isFace: true, isTime:false, selected: true },
    { key: 'James', type:2, isTime:true, selected: false },
    { key: 'Joel', type:1, isTime:false, selected: false },
    { key: 'John', type:1, isTime:true, selected: false },
  ],
};

Notice.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  onBack: PropTypes.func,
};
