import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  LIGHTGRAY_COLOR,
  SETTING_FONT_COLOR,
  SETTING_INFO_FONT_COLOR,
  SETTING_LOGOUT_FONT_COLOR,
  SETTING_DROP_FONT_COLOR,
  WHITE_COLOR,
  SETTING_ACTIVE_COLOR,
  SETTING_DEACTIVE_COLOR,
  SETTING_BACKGROUND,
  BORDER_BOTTOM_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: SETTING_BACKGROUND,
  },
  settingBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingStatus: {
    position: 'absolute',
    right: 30 * PixelRatio,
    top: 75 * PixelRatio,
    alignItems: 'center',
    justifyContent: 'center',
    width: 33.3 * PixelRatio,
    height: 33.3 * PixelRatio,
    borderRadius: 33.3 * 0.5 * PixelRatio,
  },
  settingStatusLabel: {
    fontSize: 13.2 * PixelRatio,
    textAlign: 'center',
    color: WHITE_COLOR,
  },
  settingLabel: {
    flex: 1,
    marginTop: 19.3 * PixelRatio,
    fontSize: 13.3 * PixelRatio,
    color: SETTING_FONT_COLOR,
    textAlign: 'center',
  },
  active: {
    borderColor: SETTING_ACTIVE_COLOR,
  },
  deactive: {
    borderColor: SETTING_DEACTIVE_COLOR,
  },
  activeStatus: {
    backgroundColor: SETTING_ACTIVE_COLOR,
  },
  deactiveStatus: {
    backgroundColor: SETTING_DEACTIVE_COLOR,
  },
  activeImage: {
    tintColor: SETTING_ACTIVE_COLOR,
  },
  deactiveImage: {
    tintColor: SETTING_DEACTIVE_COLOR,
  },
  top: {
    paddingVertical: 46.3 * PixelRatio,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: BORDER_BOTTOM_COLOR,
    backgroundColor: WHITE_COLOR,
  },
  topLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginTop: 10 * PixelRatio,
    backgroundColor: WHITE_COLOR,
    borderTopWidth: 0.7 * PixelRatio,
    borderColor: BORDER_BOTTOM_COLOR,
  },
  itemBox: {
    height: 56.7 * PixelRatio,
    paddingHorizontal: 20 * PixelRatio,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: BORDER_BOTTOM_COLOR,
  },
  infoLabel: {
    width,
    textAlign: 'center',
    marginTop: 10 * PixelRatio,
    marginBottom: 10 * PixelRatio,
    fontSize: 13.3 * PixelRatio,
    color: SETTING_INFO_FONT_COLOR,
  },
  itemBoxLabel: {
    fontSize: 18 * PixelRatio,
    lineHeight: 27 * PixelRatio,
    color: SETTING_FONT_COLOR,
  },
  itemBoxFocusLabel: {
    fontSize: 18 * PixelRatio,
    lineHeight: 27 * PixelRatio,
    color: COLOR,
  },
  subBoxLabel: {
    fontSize: 15.3 * PixelRatio,
    color: SETTING_FONT_COLOR,
  },
  logoutLabel: {
    fontSize: 15.3 * PixelRatio,
    color: SETTING_LOGOUT_FONT_COLOR,
  },
  dropLabel: {
    fontSize: 15.3 * PixelRatio,
    color: SETTING_DROP_FONT_COLOR,
  },
  email: {
    fontSize: 15.3 * PixelRatio,
    color: COLOR,
  },
  facebook: {
    fontSize: 15.3 * PixelRatio,
    color: LIGHTGRAY_COLOR,
  },
  password: {
    fontSize: 15.3 * PixelRatio,
    color: LIGHTGRAY_COLOR,
  },
  phone: {
    fontSize: 15.3 * PixelRatio,
    color: COLOR,
  },
  versionBox: {
    padding: 26.7 * PixelRatio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  versionLabel: {
    fontSize: 12 * PixelRatio,
    color: SETTING_INFO_FONT_COLOR,
  },
});

export default styles;
