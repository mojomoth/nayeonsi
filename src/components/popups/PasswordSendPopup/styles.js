import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';

const styles = StyleSheet.create({
  header: {
    paddingTop: 14 * PixelRatio,
    paddingBottom: 14 * PixelRatio,
  },
  panel: {
    width: 374 * PixelRatio,
    height: null,
  },
  content: {
    flexDirection: 'row',
    overflow: 'hidden',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 28 * PixelRatio,
    paddingBottom: 26.5 * PixelRatio,
  },
  wrapper: {
    width: 320.7 * PixelRatio,
  },
  textInput: {
    flex: 1,
  },
  button: {
    width: 320.7 * PixelRatio,
    height: 45.3 * PixelRatio,
    marginTop: 10 * PixelRatio,
  },
});

export default styles;
