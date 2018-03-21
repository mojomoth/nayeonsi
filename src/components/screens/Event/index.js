import React, { Component } from 'react';
import { View, FlatList, Linking } from 'react-native';
import PropTypes from 'prop-types';
import MainContainer from 'systems/MainContainer';
import Article from './Article';
import styles from './styles';

export default class Event extends Component {
  onPress = (link, isActivated) => {
    if (isActivated) {
      Linking.openURL(link);
    }
  };

  render = () => (
    <MainContainer 
      title={this.props.title}
      alarm={this.props.alarm}
      alarmCount={this.props.alarmCount}
      navigator={this.props.navigator} 
      menu={4}
      isUnderline   
      isLoading={this.props.isLoading}
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
              onPress={() => this.onPress(item.link, item.isActivated)}
              source={item.source}
              link={item.link}
              isActivated={item.isActivated}
            />)}
        />
      </View>
    </MainContainer>
  );
}

Event.defaultProps = {
  title: '이벤트',
  alarm: '',
  onBack: () => {},
  data: [
    { key: '1', link: 'http://www.naver.com', isActivated: false, source: { uri: 'http://blogfiles10.naver.net/MjAxNjEyMTJfNDAg/MDAxNDgxNTI1MjM3NTk1.dx8tSCrzDmgUSEiwQuNQoOFadXHptAOsEM36fWZLt8Mg.5a1ZiMLYP-2wmxH3NxojBwgGw83yZcLWEd5zDWl8OyAg.JPEG.ssong8687/%B9%E8%B3%CA%C8%AB%BA%B8%C8%BF%B0%FA%2C_%B9%E8%B3%CA%C8%AB%BA%B8%2C_%B9%E8%B3%CA%B8%B6%C4%C9%C6%C3%C8%BF%B0%FA%2C_%B9%E8%B3%CA%B8%B6%C4%C9%C6%C3%2C_%B9%E8%B3%CA%2C_%C8%AB%BA%B8_%284%29.jpg' } },
    { key: '2', link: 'http://www.google.com', isActivated:true, source: { uri: 'http://blogfiles10.naver.net/MjAxNjEyMTJfNDAg/MDAxNDgxNTI1MjM3NTk1.dx8tSCrzDmgUSEiwQuNQoOFadXHptAOsEM36fWZLt8Mg.5a1ZiMLYP-2wmxH3NxojBwgGw83yZcLWEd5zDWl8OyAg.JPEG.ssong8687/%B9%E8%B3%CA%C8%AB%BA%B8%C8%BF%B0%FA%2C_%B9%E8%B3%CA%C8%AB%BA%B8%2C_%B9%E8%B3%CA%B8%B6%C4%C9%C6%C3%C8%BF%B0%FA%2C_%B9%E8%B3%CA%B8%B6%C4%C9%C6%C3%2C_%B9%E8%B3%CA%2C_%C8%AB%BA%B8_%284%29.jpg' } },
    { key: '3', link: 'http://www.naver.com', isActivated:true, source: { uri: 'http://blogfiles10.naver.net/MjAxNjEyMTJfNDAg/MDAxNDgxNTI1MjM3NTk1.dx8tSCrzDmgUSEiwQuNQoOFadXHptAOsEM36fWZLt8Mg.5a1ZiMLYP-2wmxH3NxojBwgGw83yZcLWEd5zDWl8OyAg.JPEG.ssong8687/%B9%E8%B3%CA%C8%AB%BA%B8%C8%BF%B0%FA%2C_%B9%E8%B3%CA%C8%AB%BA%B8%2C_%B9%E8%B3%CA%B8%B6%C4%C9%C6%C3%C8%BF%B0%FA%2C_%B9%E8%B3%CA%B8%B6%C4%C9%C6%C3%2C_%B9%E8%B3%CA%2C_%C8%AB%BA%B8_%284%29.jpg' } },
    { key: '4', link: 'http://www.naver.com', isActivated:true, source: { uri: 'http://blogfiles10.naver.net/MjAxNjEyMTJfNDAg/MDAxNDgxNTI1MjM3NTk1.dx8tSCrzDmgUSEiwQuNQoOFadXHptAOsEM36fWZLt8Mg.5a1ZiMLYP-2wmxH3NxojBwgGw83yZcLWEd5zDWl8OyAg.JPEG.ssong8687/%B9%E8%B3%CA%C8%AB%BA%B8%C8%BF%B0%FA%2C_%B9%E8%B3%CA%C8%AB%BA%B8%2C_%B9%E8%B3%CA%B8%B6%C4%C9%C6%C3%C8%BF%B0%FA%2C_%B9%E8%B3%CA%B8%B6%C4%C9%C6%C3%2C_%B9%E8%B3%CA%2C_%C8%AB%BA%B8_%284%29.jpg' } },
  ],
};

Event.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  onBack: PropTypes.func,
};
