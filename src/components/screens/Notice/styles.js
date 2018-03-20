import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  NOTICE_BORDER_COLOR,
  NOTICE_BACKGROUND_COLOR,
  WHITE_COLOR,
  GRAY_COLOR,
  LIGHTGRAY_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width,
    backgroundColor: NOTICE_BACKGROUND_COLOR,
  },
  article: {
    marginTop: 10.7 * PixelRatio,
    paddingVertical: 20 * PixelRatio,
    paddingHorizontal: 20 * PixelRatio,
    backgroundColor: WHITE_COLOR,
    borderTopWidth: 0.7 * PixelRatio,
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: NOTICE_BORDER_COLOR,
  },
  title: {
    fontSize: 18 * PixelRatio,
    color: COLOR,
    marginBottom: 9 * PixelRatio,
  },
  date: {
    fontSize: 13.3 * PixelRatio,
    color: LIGHTGRAY_COLOR,
    marginBottom: 10 * PixelRatio,
  },
  text: {
    fontSize: 15.3 * PixelRatio,
    color: GRAY_COLOR,
  },
  list: {
  },
});

export default styles;
