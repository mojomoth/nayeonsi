import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  WHITE_COLOR,
  BLACK_COLOR,
  APPEAL_RESULT_TITLE_COLOR,
  APPEAL_RESULT_TEXT_COLOR,
} from 'constants/color';

const styles = StyleSheet.create({
  appealResult: {
    position: 'absolute',
    width: '100%',
    height: 196.7 * PixelRatio,
    bottom: 0 * PixelRatio,
    left: 0 * PixelRatio,
  },
  box: {
    position: 'absolute',
    bottom: 0 * PixelRatio,
    left: 0 * PixelRatio,
    width: 413 * PixelRatio,
    height: 166.7 * PixelRatio,
    backgroundColor: WHITE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  title: {
    fontSize: 22.8 * PixelRatio,
    lineHeight: 28 * PixelRatio,
    color: APPEAL_RESULT_TITLE_COLOR,
  },
  textBox: {
    flexDirection: 'row',
    marginTop: 10 * PixelRatio,
  },
  text: {
    fontSize: 15.6 * PixelRatio,
    color: APPEAL_RESULT_TEXT_COLOR,
  },
  focusText: {
    fontSize: 15.6 * PixelRatio,
    color: COLOR,
  },
  icon: {
    position: 'absolute',
    top: 0 * PixelRatio,
    right: 15 * PixelRatio,
    shadowColor: BLACK_COLOR,
    shadowOffset: {
      width: 0.8 * PixelRatio,
      height: 1.4 * PixelRatio,
    },
    shadowRadius: 3.3 * PixelRatio,
    shadowOpacity: 1 * PixelRatio,
  },
});

export default styles;
