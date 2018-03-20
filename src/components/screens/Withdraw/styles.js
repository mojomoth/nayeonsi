import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  BLACK_COLOR,
  GRAY_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const styles = StyleSheet.create({
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20 * PixelRatio,
  },
  bottom: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 20 * PixelRatio,
    paddingHorizontal: 25 * PixelRatio,
  },
  image: {
    width: 92.6 * PixelRatio,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 18 * PixelRatio,
    fontSize: 19.8 * PixelRatio,
    lineHeight: 23.8 * PixelRatio,
    color: BLACK_COLOR,
  },
  text: {
    marginTop: 18 * PixelRatio,
    fontSize: 14 * PixelRatio,
    lineHeight: 21.6 * PixelRatio,
    color: GRAY_COLOR,
    textAlign: 'center',
  },
  input: {
    width: 374 * PixelRatio,
    marginTop: 40 * PixelRatio,
  },
  button: {
    width: 374 * PixelRatio,
    height: 58.7 * PixelRatio,
  },
  buttonLabel: {
    fontSize: 19.8 * PixelRatio,
  },
});

export default styles;
