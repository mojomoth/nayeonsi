import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  CARD_NAME_COLOR,
  CARD_INFO_COLOR,
  CARD_BORDER_COLOR,
  CARD_ICONS_BORDER_COLOR,
  CARD_DELETE_BACKGROUND_COLOR,
} from 'constants/color';

const SIZE = 111;

const styles = StyleSheet.create({
  card: {
    width: SIZE * PixelRatio,
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
  picture: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  iconBox: {
    position: 'absolute',
    top: (SIZE - 22) * PixelRatio,
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
    marginTop: 6 * PixelRatio,
    color: CARD_NAME_COLOR,
    fontSize: 13.2 * PixelRatio,
  },
  infoLabel: {
    textAlign: 'center',
    color: CARD_INFO_COLOR,
    fontSize: 12 * PixelRatio,
  },
  icon: {
    width: 20 * PixelRatio,
    height: 20 * PixelRatio,
    marginHorizontal: 2 * PixelRatio,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secret: {
    position: 'relative',
    top: 2 * PixelRatio,
  },
  crown: {
  },
  location: {
  },
  trashButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: SIZE * PixelRatio,
    height: SIZE * PixelRatio,
    borderRadius: 3.3 * PixelRatio,
    overflow: 'hidden',
  },
  trashBox: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: CARD_DELETE_BACKGROUND_COLOR,
    opacity: 0.4,
  },
  trash: {
    position: 'absolute',
    top: 6.6 * PixelRatio,
    right: 6.7 * PixelRatio,
  },
});

export default styles;
