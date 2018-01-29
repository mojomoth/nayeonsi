import { Navigation } from 'react-native-navigation';
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });

Navigation.registerComponent('storybook.UI', () => StorybookUI);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'storybook.UI',
    title: 'Storybook',
  },
});

export default StorybookUI;
