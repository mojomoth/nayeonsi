import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width,
    paddingLeft: 20 * PixelRatio,
    paddingRight: 20 * PixelRatio,
    paddingTop: 20 * PixelRatio,
    paddingBottom: 20 * PixelRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultLabel: {
    marginTop: 20 * PixelRatio,
    fontSize: 19.8 * PixelRatio,
    lineHeight: 30 * PixelRatio,
  },
  textInput: {
    flex: 1,
  },
  loginButton: {
    width: 374 * PixelRatio,
    marginBottom: 26.7 * PixelRatio,
  },
});

export default styles;