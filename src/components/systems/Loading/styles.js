import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  cover: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  loading: {
  },
});

export default styles;
