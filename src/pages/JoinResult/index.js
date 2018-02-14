import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import JoinResult from 'screens/JoinResult';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    backButtonHidden: true,
  };

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => false);
  }

  onBack = () => this.props.navigator.pop();

  onPress = () => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'Landing', // unique ID registered with Navigation.registerScreen
        navigatorStyle: {
        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        
      },
    });
  };

  render = () => (
    <JoinResult
      onBack={this.onBack}
      onPress={this.onPress}
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
