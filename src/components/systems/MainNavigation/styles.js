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
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 54 * PixelRatio,
    borderTopWidth: 0.7 * PixelRatio,
    borderColor: NAVIGATION_BORDER_COLOR,
    backgroundColor: NAVIGATION_BACKGROUND_COLOR,
  },
});

export default styles;
