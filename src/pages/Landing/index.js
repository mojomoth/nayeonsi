import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import Landing, { ANIMATE_TIME } from 'screens/Landing';
import { checkAuthStateChanged, loginUser } from 'store/actions/auth';

class Page extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  componentDidMount = () => {
    this.landing.fade(1, ANIMATE_TIME);

    this.props.checkAuthStateChanged((user) => {
      let isUser = false;
      if (user) {
        this.props.loginUser(user);
        isUser = true;
      }

    });

    this.complete(false);
  };

  complete = isUser => (
    isUser ?
      setTimeout(this.changeTabScreen, ANIMATE_TIME)
      :
      setTimeout(this.changeSingleScreen, ANIMATE_TIME, 'Login')
  );

  changeSingleScreen = screenName => 
    Navigation.startSingleScreenApp({
      screen: {
        screen: screenName,
      },
    });

  changeTabScreen = () => 
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'Main', 
          icon: require('assets/images/icTabHome.png'),
          selectedIcon: require('assets/images/icTabHomePre.png'),
          navigatorStyle: { navBarHidden: true },
          iconInsets: { bottom: -60 },
        },
        {
          screen: 'History', 
          icon: require('assets/images/icTabProfile.png'),
          selectedIcon: require('assets/images/icTabProfilePre.png'),
          navigatorStyle: { navBarHidden: true },
        },
        {
          screen: 'Appeal', 
          icon: require('assets/images/icTabPlace.png'),
          selectedIcon: require('assets/images/icTabPlacePre.png'),
          navigatorStyle: { navBarHidden: true },
        },
        {
          screen: 'Message', 
          icon: require('assets/images/icTabDm.png'),
          selectedIcon: require('assets/images/icTabDmPre.png'),
          navigatorStyle: { navBarHidden: true },
        },
        {
          screen: 'Menus', 
          icon: require('assets/images/icTabSetting.png'),
          selectedIcon: require('assets/images/icTabSettingPre.png'),
          navigatorStyle: { navBarHidden: true },
        },
      ],
      appStyle: {
        tabBarHidden: true,
      },
      tabsStyle: {
        tabBarHidden: true,
      },
    });

  render = () => (
    <Landing 
      ref={(ref) => { this.landing = ref; }} 
    />
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  checkAuthStateChanged: callback => dispatch(checkAuthStateChanged(callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
