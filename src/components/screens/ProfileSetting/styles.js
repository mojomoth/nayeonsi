import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  WHITE_COLOR,
  GRAY_COLOR,
  CONTENT_HEADER_BACKGROUND_COLOR,
  CONTENT_HEADER_BORDER_COLOR,
  JOIN_HEADER_FONT_COLOR,
  PROFILE_SETTING_BACKGROUND,
  PROFILE_SETTING_INFO_BACKGROUND,
  PROFILE_SETTING_INFO_BORDER,
  PROFILE_SETTING_BORDER,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scroll: {
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PROFILE_SETTING_BACKGROUND,
  },
  content: {
    flex: 1,
    width,
    paddingLeft: 20 * PixelRatio,
    paddingRight: 20 * PixelRatio,
    paddingTop: 20 * PixelRatio,
    paddingBottom: 20 * PixelRatio,
    backgroundColor: WHITE_COLOR,
  },
  album: {
    paddingVertical: 25 * PixelRatio,
    backgroundColor: WHITE_COLOR,
    borderColor: CONTENT_HEADER_BORDER_COLOR,
    borderBottomWidth: 0.7 * PixelRatio,
  },
  profile: {
    marginVertical: 10 * PixelRatio,
    borderColor: CONTENT_HEADER_BORDER_COLOR,
    borderTopWidth: 0.7 * PixelRatio,
    borderBottomWidth: 0.7 * PixelRatio,
  },
  appeal: {
    borderColor: CONTENT_HEADER_BORDER_COLOR,
    borderTopWidth: 0.7 * PixelRatio,
  },
  boxes: {
    paddingLeft: 20 * PixelRatio,
    paddingRight: 20 * PixelRatio,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentHeader: {
    padding: 20 * PixelRatio,
    backgroundColor: CONTENT_HEADER_BACKGROUND_COLOR,
    borderColor: CONTENT_HEADER_BORDER_COLOR,
    borderBottomWidth: 0.7 * PixelRatio,
    marginBottom: 20 * PixelRatio,
  },
  contentHeaderLabel: {
    textAlign: 'center',
    fontSize: 15.6 * PixelRatio,
    color: JOIN_HEADER_FONT_COLOR,
  },
  smallBoxes1: {
    marginLeft: 13 * PixelRatio,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  smallBoxes2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13 * PixelRatio,
  },
  infoHeader: {
    width,
    height: 56.7 * PixelRatio,
    backgroundColor: PROFILE_SETTING_INFO_BACKGROUND,
    borderColor: PROFILE_SETTING_INFO_BORDER,
    borderTopWidth: 0.7 * PixelRatio,
    borderBottomWidth: 0.7 * PixelRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoHeaderLabel: {
    fontSize: 15.6 * PixelRatio,
    color: GRAY_COLOR,
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
