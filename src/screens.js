import { Navigation } from 'react-native-navigation';
import FirstTabScreen from './pages/test/FirstTabScreen';
import SecondTabScreen from './pages/test/SecondTabScreen';
import PushedScreen from './pages/test/PushedScreen';
import CameraRollScreen from './pages/test/CameraRollScreen';

// screen related book keeping
const registerScreens = (store, Provider) => {
  Navigation.registerComponent('example.FirstTabScreen', () => CameraRollScreen, store, Provider);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen, store, Provider);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen, store, Provider);
};

export default registerScreens;
