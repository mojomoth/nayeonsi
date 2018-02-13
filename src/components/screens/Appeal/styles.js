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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 47.7 * PixelRatio,
  },
  buttonBox: {
    flex: 1,
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
  text2: {
    fontSize: 19.8 * PixelRatio,
    lineHeight: 27.8 * PixelRatio,
  },
  text3: {
    fontSize: 15.6 * PixelRatio,
    lineHeight: 23.6 * PixelRatio,
  },
  textBox1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 19.3 * PixelRatio,
  },
  textBox2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 47.7 * PixelRatio,
  },
  secretButton: {
    width: 374 * PixelRatio,
    marginBottom: 10 * PixelRatio,
  },
  appealButton: {
    width: 374 * PixelRatio,
    marginBottom: 10 * PixelRatio,
  },
  likeButton: {
    width: 374 * PixelRatio,
    marginBottom: 26 * PixelRatio,
  },
  secretLabel: {
    fontSize: 19.8 * PixelRatio,
  },
  appealLabel: {
    fontSize: 19.8 * PixelRatio,
  },
  likeLabel: {
    fontSize: 19.8 * PixelRatio,
  },
  aboutAppeal: {
    fontSize: 13.2 * PixelRatio,
    color: COLOR,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  secretIcon: {
    position: 'absolute',
    left: 27.7 * PixelRatio,
    top: 20.3 * PixelRatio,
  },
  appealIcon: {
    position: 'absolute',
    left: 31.1 * PixelRatio,
    top: 18.7 * PixelRatio,
  },
  likeIcon: {
    position: 'absolute',
    left: 33.7 * PixelRatio,
    top: 18.7 * PixelRatio,
  },
});

export default styles;
