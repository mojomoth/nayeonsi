import { Provider } from 'react-redux';
import registerScreens from './screens';
import store from 'store';
import { persistStore } from 'redux-persist';
import { startMainScreen, startLandingScreen } from 'lib/navigator';

// registerScreens(store, Provider);
// startMainScreen();

// persistStore(
//   store, 
//   null, 
//   () => {
    registerScreens(store, Provider);
    startLandingScreen();
//   },
// );
