import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { DEFAULT_FONT as FONT } from 'constants/font';
import { COLOR, FONT_BLACK_COLOR, FONT_WHITE_COLOR, BORDER_BOTTOM_COLOR } from 'constants/color';

const styles = StyleSheet.create({
  header: {
    paddingTop: 22 * PixelRatio,
    paddingBottom: 14 * PixelRatio,
  },
  panel: {
    width: 374 * PixelRatio,
    height: null,
  },
  content: {
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
  pointBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10 * PixelRatio,
  },
  pointIcon: {
    tintColor: COLOR,
    marginRight: 5 * PixelRatio,
  },
  pointLabel: {
    color: COLOR,
    fontSize: 26.4 * PixelRatio,
  },
  pointButtonLabel: {
    width: null,
    height: 18.7 * PixelRatio,
    marginLeft: 5 * PixelRatio,
    paddingLeft: 10 * PixelRatio,
    paddingRight: 10 * PixelRatio,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 18.7 * 0.5 * PixelRatio,
    borderColor: FONT_WHITE_COLOR,
    borderWidth: PixelRatio * 0.7,
  },
  pointButtonLabelText: {
    color: FONT_WHITE_COLOR,
    fontSize: 13.2 * PixelRatio,
  },
  titleLabel: {
    fontFamily: FONT,
    color: COLOR,
    fontSize: PixelRatio * 21.3,
    textAlign: 'center',
  },
  nameLabel: {
    fontFamily: FONT,
    color: FONT_BLACK_COLOR,
  },
  aboutAppealLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30 * PixelRatio,
    fontSize: PixelRatio * 15.3,
    textAlign: 'center',
  },
  aboutSecret: {
    width: 320.7 * PixelRatio,
    padding: 5 * PixelRatio,
    marginBottom: 10 * PixelRatio,
    fontFamily: FONT,
    color: COLOR,
    fontSize: PixelRatio * 12,
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: BORDER_BOTTOM_COLOR,
    borderBottomWidth: PixelRatio * 0.7,
  },
});

export default styles;
