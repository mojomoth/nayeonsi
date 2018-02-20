import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { LIGHT_FONT } from 'constants/font';
import { 
  COLOR,
  BLACK_COLOR,
  GRAY_COLOR,
  FONT_WHITE_COLOR,
  ALBUM_DOT_BORDER_COLOR,
  ALBUM_DOT_BACKGROUND_COLOR,
  ALBUM_ACTIVE_DOT_BORDER_COLOR,
  ALBUM_ACTIVE_DOT_BACKGROUND_COLOR,
  ABOUT_BORDER_COLOR,
} from 'constants/color';

import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  floatingHeader: {
    position: 'absolute',
    top: 10 * PixelRatio,
    left: 0,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  moreBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  back: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#000',
  },
  iconBox: {
    paddingHorizontal: 20 * PixelRatio,
    paddingVertical: 5 * PixelRatio,
  },
  album: {
    width,
    height: 414 * PixelRatio,
    margin: 0,
    padding: 0,
  },
  albumDot: {
    width: 9.3 * PixelRatio,
    height: 9.3 * PixelRatio,
    borderWidth: 0.7 * PixelRatio,
    borderColor: ALBUM_DOT_BORDER_COLOR,
    backgroundColor: ALBUM_DOT_BACKGROUND_COLOR,
    opacity: 0.8,
  },
  albumActiveDot: {
    width: 9.3 * PixelRatio,
    height: 9.3 * PixelRatio,
    borderWidth: 0.7 * PixelRatio,
    borderColor: ALBUM_ACTIVE_DOT_BORDER_COLOR,
    backgroundColor: ALBUM_ACTIVE_DOT_BACKGROUND_COLOR,
    opacity: 0.8,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 19.7 * PixelRatio,
    overflow: 'visible',
  },
  rightSide: {
    overflow: 'visible',
  },
  nameLabel: {
    fontSize: 20 * PixelRatio,
    lineHeight: 25 * PixelRatio,
    color: BLACK_COLOR,
    marginBottom: 13 * PixelRatio,
  },
  infoLabel: {
    fontSize: 15.6 * PixelRatio,
    lineHeight: 19.8 * PixelRatio,
    color: GRAY_COLOR,
  },
  likeButton: {
    width: 80 * PixelRatio,
    height: 80 * PixelRatio,
    marginTop: -60 * PixelRatio,
    marginBottom: 20 * PixelRatio,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR,
    borderRadius: 40 * PixelRatio,
    borderWidth: 1.3 * PixelRatio,
    borderColor: FONT_WHITE_COLOR,
  },
  innerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likeButtonLabel: {
    marginTop: 2 * PixelRatio,
    fontSize: 15.6 * PixelRatio,
    color: FONT_WHITE_COLOR,
  },
  likeIcon: {
    width: 30 * PixelRatio,
    resizeMode: 'contain',
  },
  infoIcon: {
    width: 33.3 * PixelRatio,
    height: 33.3 * PixelRatio,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16.65 * PixelRatio,
    borderWidth: 1.3 * PixelRatio,
    borderColor: COLOR,
  },
  innerIcon: {
    tintColor: COLOR,
  },
  locationIcon: {
    width: 16 * PixelRatio,
    resizeMode: 'contain',
  },
  crownIcon: {
    width: 24.7 * PixelRatio,
    resizeMode: 'contain',
  },
  about: {
    marginBottom: 10 * PixelRatio,
    paddingHorizontal: 19.7 * PixelRatio,
    paddingBottom: 19.7 * PixelRatio,
    borderTopWidth: 0.7 * PixelRatio,
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: ABOUT_BORDER_COLOR,
  },
  messageLabel: {
    fontSize: 16.8 * PixelRatio,
    color: COLOR,
    marginVertical: 34 * PixelRatio,
    textAlign: 'center',
  },
  aboutLabel: {
    flexDirection: 'row',
    marginBottom: 19.7 * PixelRatio,
  },
  aboutTitle: {
    flex: 1,
    color: BLACK_COLOR,
    fontSize: 15.6 * PixelRatio,
  },
  aboutBox: {
    flex: 2.5,
    flexDirection: 'row',
  },
  aboutText: {
    fontFamily: LIGHT_FONT,
    fontSize: 15.6 * PixelRatio,
    color: BLACK_COLOR,
    fontWeight: '100',
  },
  aboutValue: {
    fontFamily: LIGHT_FONT,
    fontSize: 15.6 * PixelRatio,
    color: COLOR,
    fontWeight: '100',
  },
  appeal: {
    paddingHorizontal: 19.7 * PixelRatio,
    paddingTop: 34 * PixelRatio,
    paddingBottom: 34 * PixelRatio,
    borderTopWidth: 0.7 * PixelRatio,
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: ABOUT_BORDER_COLOR,
  },
  appealHeader: {
    fontSize: 15.6 * PixelRatio,
    marginBottom: 13 * PixelRatio,
    color: COLOR,
  },
  appealTypeBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20 * PixelRatio,
  },
  appealType: {
    height: 30 * PixelRatio,
    marginBottom: 6.7 * PixelRatio,
    marginRight: 6.7 * PixelRatio,
    fontSize: 15.6 * PixelRatio,
    lineHeight: 30 * PixelRatio,
    color: GRAY_COLOR,
    paddingHorizontal: 13 * PixelRatio,
    borderRadius: 15 * PixelRatio,
    borderWidth: 0.7 * PixelRatio,
    borderColor: GRAY_COLOR,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;

