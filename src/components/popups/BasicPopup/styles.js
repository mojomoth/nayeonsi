import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';

const styles = StyleSheet.create({
  header: {
    paddingTop: 22 * PixelRatio,
    paddingBottom: 10 * PixelRatio,
  },
  content: {
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 28 * PixelRatio,
    paddingBottom: 26.5 * PixelRatio,
  },
  titleLabel: {
    textAlign: 'center',
  },
  textLabel: {
    textAlign: 'center',
  },
  button: {
    width: 320.7 * PixelRatio,
    height: 45.3 * PixelRatio,
  },
  panel: {
    width: 374 * PixelRatio,
    height: null,
  },
});

export default styles;
