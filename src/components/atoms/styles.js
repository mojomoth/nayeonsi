import { StyleSheet, PixelRatio } from 'react-native';

export const FONT = 'Spoqa Han Sans Regular';
export const FACEBOOK_COLOR = 'rgb(58, 88, 158)';
export const COLOR = 'rgb(241, 34, 8)';
export const DISABLED_COLOR = 'rgb(193, 193, 193)';
export const FONT_BLACK_COLOR = 'rgb(50, 50, 50)';
export const FONT_WHITE_COLOR = '#FFF';
export const FONT_GRAY_COLOR = 'rgb(153, 153, 153)';
export const FONT_TEXT_COLOR = 'rgb(102, 102, 102)';
export const BACKGROUND_COLOR = '#FFF';
export const BACKGROUND_GRAY_COLOR = 'rgb(240, 240, 240)';
export const BACKGROUND_LIGHTGRAY_COLOR = 'rgb(248, 248, 248)';

const styles = StyleSheet.create({
  label: {
    fontFamily: FONT,
    color: FONT_TEXT_COLOR,
    fontSize: PixelRatio.getFontScale() * 16.7,
  },
  subLabel: {
    fontFamily: FONT,
    color: FONT_GRAY_COLOR,
    fontSize: PixelRatio.getFontScale() * 13.3,
  },
  titleLabel: {
    fontFamily: FONT,
    color: COLOR,
    fontSize: PixelRatio.getFontScale() * 21.3,
  },
  subTitleLabel: {
    fontFamily: FONT,
    color: FONT_TEXT_COLOR,
    fontSize: PixelRatio.getFontScale() * 15.3,
  },
  headLabel: {
    fontFamily: FONT,
    color: FONT_BLACK_COLOR,
    fontSize: PixelRatio.getFontScale() * 22.8,
  },
  alarmLabel: {
    fontFamily: FONT,
    color: COLOR,
    fontSize: PixelRatio.getFontScale() * 15.6,
  },
  filledButtonLabel: {
    fontFamily: FONT,
  },
  outlineButtonLabel: {
    fontFamily: FONT,
  },
  filledButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlineButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
    borderWidth: PixelRatio.getFontScale() * 1,
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
    borderWidth: PixelRatio.getFontScale() * 1.3,
  },
  panel: {
    flexDirection: 'row',
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: PixelRatio.getFontScale() * 6.7,
  },
  articlePanel: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: BACKGROUND_COLOR,
    borderColor: 'rgb(225, 225,225)',
    borderTopWidth: PixelRatio.getFontScale() * 0.7,
    borderBottomWidth: PixelRatio.getFontScale() * 0.7,
  },
  screen: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;
