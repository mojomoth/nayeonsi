import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { COLOR, FONT_WHITE_COLOR } from 'constants/color';

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
  pointBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20 * PixelRatio,
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
});

export default styles;
