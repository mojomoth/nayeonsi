import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { DEFAULT_FONT as FONT } from 'constants/font';
import { 
  COLOR,
  FONT_BLACK_COLOR,
  FONT_WHITE_COLOR,
  FONT_GRAY_COLOR,
  FONT_TEXT_COLOR,
  BACKGROUND_COLOR,
  BORDER_COLOR,
  INPUT_TEXT_COLOR, 
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  label: {
    fontFamily: FONT,
    color: FONT_TEXT_COLOR,
    fontSize: PixelRatio * 16.7,
    lineHeight: PixelRatio * 22,
  },
  subLabel: {
    fontFamily: FONT,
    color: FONT_GRAY_COLOR,
    fontSize: PixelRatio * 13.3,
  },
  titleLabel: {
    fontFamily: FONT,
    color: COLOR,
    fontSize: PixelRatio * 21.3,
    textAlign: 'center',
  },
  subTitleLabel: {
    fontFamily: FONT,
    color: FONT_TEXT_COLOR,
    fontSize: PixelRatio * 15.3,
    textAlign: 'center',
  },
  headLabel: {
    fontFamily: FONT,
    color: FONT_BLACK_COLOR,
    fontSize: PixelRatio * 22.8,
  },
  alarmLabel: {
    fontFamily: FONT,
    color: FONT_WHITE_COLOR,
    fontSize: PixelRatio * 15.6,
  },
  filledButtonLabel: {
    fontFamily: FONT,
  },
  outlineButtonLabel: {
    fontFamily: FONT,
  },
  filledButton: {
    paddingLeft: 10 * PixelRatio,
    paddingRight: 10 * PixelRatio,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  outlineButton: {
    paddingLeft: 10 * PixelRatio,
    paddingRight: 10 * PixelRatio,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: BACKGROUND_COLOR,
    borderWidth: PixelRatio * 1,
  },
  filledRoundButton: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  outlineRoundButton: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: BACKGROUND_COLOR,
    borderWidth: PixelRatio * 1.3,
  },
  panel: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: PixelRatio * 6.7,
    overflow: 'hidden',
  },
  articlePanel: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: BACKGROUND_COLOR,
    borderColor: BORDER_COLOR,
    borderTopWidth: PixelRatio * 0.7,
    borderBottomWidth: PixelRatio * 0.7,
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width,
    paddingTop: 10 * PixelRatio,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: PixelRatio * 10,
    borderBottomWidth: PixelRatio * 0.7,
  },
  textInput: {
    fontFamily: FONT,
    color: INPUT_TEXT_COLOR,
    fontSize: PixelRatio * 16.7,
    alignSelf: 'center',
  },
  selectOption: {
    height: PixelRatio * 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: BORDER_COLOR,
    borderBottomWidth: PixelRatio * 0.7,
  },
  selectButton: {
    flex: 1,
    width: '100%',
  },
  listOption: {
    height: PixelRatio * 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: BORDER_COLOR,
    borderBottomWidth: PixelRatio * 0.7,
    backgroundColor: BACKGROUND_COLOR,
  },
  selectOptionText: {
    fontFamily: FONT,
    fontSize: PixelRatio * 16,
  },
  backPanel: {
    flex: 1,
    width,
  },
});

export default styles;
