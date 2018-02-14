import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  BLACK_COLOR,
  FONT_TEXT_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    justifyContent: 'flex-start',
  },
  image: {
    width,
    height: 478 * PixelRatio,
    resizeMode: 'contain',
  },
  buttonBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: COLOR,
  },
  black: {
    color: BLACK_COLOR,
  },
  gray: {
    color: FONT_TEXT_COLOR,
  },
  text1: {
    fontSize: 15.6 * PixelRatio,
    lineHeight: 23.6 * PixelRatio,
  },
  textBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10 * PixelRatio,
    marginBottom: 10 * PixelRatio,
  },
  tempButton: {
    width: 374 * PixelRatio,
  },
  tempLabel: {
    fontSize: 18 * PixelRatio,
  },
  tempIcon: {
    marginRight: 10 * PixelRatio,
    tintColor: '#FFFFFF',
  },
});

export default styles;
