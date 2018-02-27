import { Navigation } from 'react-native-navigation';

export const startLandingScreen = () =>
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'Landing', 
      navigatorStyle: {},
      navigatorButtons: {},
    },
  });

export const startMainScreen = () => 
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
        icon: require('assets/images/icTabHome.png'),
        selectedIcon: require('assets/images/icTabHomePre.png'),
        navigatorStyle: { navBarHidden: true },
      },
    ],
    appStyle: {
      tabBarHidden: true,
    },
    tabsStyle: {
      tabBarHidden: true,
    },
    animationType: 'none',
  });
