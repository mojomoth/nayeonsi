import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { BORDER_TOP_COLOR } from 'constants/color';

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
    width: '100%',
    height: 239 * PixelRatio,
    borderColor: BORDER_TOP_COLOR,
    borderTopWidth: PixelRatio * 0.7,
    overflow: 'hidden',
  },
  list: {
    marginTop: -PixelRatio * 0.7,
  },
  selectOption: {
    flex: 1,
  },
  optionLeft: {
    flex: 2,
    alignItems: 'flex-start',
    paddingRight: 20 * PixelRatio,
  },
  optionRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  typeLabel: {
    marginLeft: 20 * PixelRatio,
  },
  searchButton: {
    width: 80 * PixelRatio,
    height: 35.3 * PixelRatio,
    marginRight: 20 * PixelRatio,
  },
  searchButtonLabel: {
    fontSize: 16.7 * PixelRatio,
    marginRight: 5 * PixelRatio,
  },
});

export default styles;
