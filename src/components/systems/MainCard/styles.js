import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  CARD_NAME_COLOR,
  CARD_INFO_COLOR,
  CARD_BORDER_COLOR,
  CARD_ICONS_BORDER_COLOR,
} from 'constants/color';

const SIZE = 166.7;

const styles = StyleSheet.create({
  card: {
    height: null,
    flexDirection: 'column',
  },
  pictureBox: {
    width: SIZE * PixelRatio,
    height: SIZE * PixelRatio,
    borderRadius: 3.3 * PixelRatio,
    borderWidth: 0.7 * PixelRatio,
    borderColor: CARD_BORDER_COLOR,
    overflow: 'hidden',
  },
  iconBox: {
    position: 'absolute',
    top: (SIZE - 31) * PixelRatio,
    right: -1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR,
    borderRadius: 3.3 * PixelRatio,
    borderWidth: 1.3 * PixelRatio,
    borderColor: CARD_ICONS_BORDER_COLOR,
  },
  nameLabel: {
    textAlign: 'center',
    marginTop: 10 * PixelRatio,
    color: CARD_NAME_COLOR,
    fontSize: 16.8 * PixelRatio,
  },
  infoLabel: {
    textAlign: 'center',
    marginTop: 4 * PixelRatio,
    color: CARD_INFO_COLOR,
    fontSize: 15.6 * PixelRatio,
  },
  icon: {
    width: 30 * PixelRatio,
    height: 30 * PixelRatio,
    marginHorizontal: 2 * PixelRatio,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secret: {
    position: 'relative',
    top: 2 * PixelRatio,
    width: 23.2 * PixelRatio,
    resizeMode: 'contain',
  },
  crown: {
    width: 22.9 * PixelRatio,
    resizeMode: 'contain',
  },
  location: {
    width: 14.7 * PixelRatio,
    resizeMode: 'contain',
  },
});

export default styles;
