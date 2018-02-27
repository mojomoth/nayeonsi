import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { BORDER_HEADER_COLOR } from 'constants/color';

const styles = StyleSheet.create({
  header: {
    height: 48.7 * PixelRatio,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: BORDER_HEADER_COLOR,
    borderBottomWidth: 0.7 * PixelRatio,
  },
  titleLabel: {
    flex: 1,
    textAlign: 'center',
  },
  left: {
    width: 52.7 * PixelRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    width: 52.7 * PixelRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    paddingHorizontal: 20 * PixelRatio,
    paddingVertical: 10 * PixelRatio,
  },
});

export default styles;
