import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  NAVIGATION_BORDER_COLOR,
  NAVIGATION_BACKGROUND_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  navigation: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 54 * PixelRatio,
    borderTopWidth: 0.7 * PixelRatio,
    borderColor: NAVIGATION_BORDER_COLOR,
    backgroundColor: NAVIGATION_BACKGROUND_COLOR,
  },
  homeIcon: {
    width: 31.5 * PixelRatio,
    resizeMode: 'contain',
  },
  personIcon: {
    width: 26 * PixelRatio,
    resizeMode: 'contain',
  },
  appealIcon: {
    width: 20 * PixelRatio,
    resizeMode: 'contain',
  },
  chatIcon: {
    width: 25 * PixelRatio,
    resizeMode: 'contain',
  },
  gearIcon: {
    width: 28 * PixelRatio,
    resizeMode: 'contain',
  },
});

export default styles;
