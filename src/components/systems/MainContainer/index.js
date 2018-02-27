import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Screen from 'atoms/Screen';
import Header from 'systems/MainHeader';
import SubHeader from 'systems/SubHeader';
import Alarm from 'systems/AlarmPanel';
import Navigation from 'systems/MainNavigation';
import Loading from 'systems/Loading';
import PropTypes from 'prop-types';
import styles from './styles';

export default class MainContainer extends Component {
  render = () => (
    <Screen style={styles.screen}>
      { this.props.isMain ? 
        <Header 
          style={styles.header} 
          isUnderline={this.props.isUnderline} 
          title={this.props.title}
          point={this.props.point}
          alarm={this.props.alarmCount}
          onAlarm={this.props.onAlarm}
          onPoint={this.props.onPoint}
        />
      :
        <SubHeader
          style={styles.header}
          isUnderline={this.props.isUnderline} 
          title={this.props.title}
          onBack={this.props.onBack}
        />
      }
      { this.props.alarm !== null && this.props.alarm !== '' ?
        <Alarm text={this.props.alarm} />
        : null
      }
      { this.props.isScroll ? 
        <ScrollView 
          contentContainerStyle={styles.scroll}
          removeClippedSubviews
        >
          {this.props.children}
        </ScrollView>
        :
        <View style={styles.view}>
          {this.props.children}
        </View>
      }

      { this.props.isNavigation ? 
        <Navigation 
          navigator={this.props.navigator} 
          menu={this.props.menu}
        />
        : null
      }
      { this.props.isLoading ? <Loading /> : null }
    </Screen>
  );
}

MainContainer.defaultProps = {
  title: '메인타이틀',
  alarm: '알람ㅋㅋㅋㅋ',
  isUnderline: false,
  children: null,
  point: 2155,
  alarmCount: 10,
  isScroll: true,
  isNavigation: true,
  isLoading: false,
  isMain: true,
  onAlarm: () => {},
  onPoint: () => {},
  onBack: () => {},
};

MainContainer.propTypes = {
  title: PropTypes.string,
  alarm: PropTypes.string,
  isUnderline: PropTypes.bool,
  children: PropTypes.node,
  point: PropTypes.number,
  alarmCount: PropTypes.number,
  isScroll: PropTypes.bool,
  isNavigation: PropTypes.bool,
  isMain: PropTypes.bool,
  isLoading: PropTypes.bool,
  onAlarm: PropTypes.func,
  onPoint: PropTypes.func,
  onBack: PropTypes.func,
};

