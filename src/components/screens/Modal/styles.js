import { StyleSheet } from 'react-native';

import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width,
  },
  inner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

