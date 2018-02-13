import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scroll: {
    width,
    alignItems: 'center',
  },
  view: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
