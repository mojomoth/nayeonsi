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
  wrapper: {
    width: 320.7 * PixelRatio,
  },
  textInput: {
    flex: 1,
  },
});

export default styles;
