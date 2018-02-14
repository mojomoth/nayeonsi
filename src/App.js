import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './screens';
import store from 'store';
import { persistStore } from 'redux-persist';

// registerScreens(store.store, Provider);

// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'Landing', // unique ID registered with Navigation.registerScreen
//     navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
//     navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
//     passProps: { persistor: store.persistor },
//   },
// });

persistStore(
  store, 
  null, 
  () => {
    registerScreens(store, Provider);

    Navigation.startSingleScreenApp({
      screen: {
        screen: 'Landing', // unique ID registered with Navigation.registerScreen
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      },
    });
  },
);

// .purge();