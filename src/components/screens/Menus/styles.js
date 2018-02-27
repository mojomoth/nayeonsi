import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  BLACK_COLOR,
  WHITE_COLOR,
  BORDER_BOTTOM_COLOR,
  MENUS_BACKGROUND_COLOR,
  MENUS_FONT_COLOR,
  MENUS_SUB_FONT_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    backgroundColor: MENUS_BACKGROUND_COLOR,
  },
  profileBox: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 33.3 * PixelRatio,
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: BORDER_BOTTOM_COLOR,
    backgroundColor: WHITE_COLOR,
  },
  profileName: {
    fontSize: 16.8 * PixelRatio,
    color: BLACK_COLOR,
    marginVertical: 9.3 * PixelRatio,
  },
  profileButton: {
    width: 93.3 * PixelRatio,
    height: 23.3 * PixelRatio,
  },
  profileButtonLabel: {
    fontSize: 13.2 * PixelRatio,
  },
  menuBox: {
    width,
    marginTop: 10 * PixelRatio,
    borderTopWidth: 0.7 * PixelRatio,
    borderColor: BORDER_BOTTOM_COLOR,
    backgroundColor: WHITE_COLOR,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20 * PixelRatio,
    paddingVertical: 15 * PixelRatio,
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: BORDER_BOTTOM_COLOR,
  },
  menuLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  menuRound: {
    width: 26.7 * PixelRatio,
    height: 26.7 * PixelRatio,
    marginRight: 9.7 * PixelRatio,
    borderRadius: 26.7 * 0.5 * PixelRatio,
    backgroundColor: COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLabel: {
    alignSelf: 'center',
    fontSize: 17 * PixelRatio,
    lineHeight: 28 * PixelRatio,
    color: MENUS_FONT_COLOR,
  },
  menuSubLabel: {
    fontSize: 14 * PixelRatio,
    color: MENUS_SUB_FONT_COLOR,
  },
  menuArrow: {
    marginLeft: 13 * PixelRatio,
  },
});

export default styles;
