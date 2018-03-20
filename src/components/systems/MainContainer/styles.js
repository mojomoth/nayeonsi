import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scroll: {
    width,
    alignItems: 'center',
  },
  view: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 54 * PixelRatio,
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
