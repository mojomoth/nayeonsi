import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './screens';
import store from './store';

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Landing', // unique ID registered with Navigation.registerScreen
    navigatorStyle: {
    }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    
  },
});



// start the app
// Navigation.startTabBasedApp({
//   tabs: [
//     {
//       label: 'One',
//       screen: 'example.FirstTabScreen', // this is a registered name for a screen
//       icon: require('../assets/images/icTabProfile.png'),
//       selectedIcon: require('../assets/images/icTabProfilePre.png'), // iOS only
//       title: 'Screen One',
//     },
//     {
//       label: 'Two',
//       screen: 'example.SecondTabScreen',
//       icon: require('../assets/images/icTabSetting.png'),
//       selectedIcon: require('../assets/images/icTabSettingPre.png'), // iOS only
//       title: 'Screen Two',
//     },
//   ],
// });
