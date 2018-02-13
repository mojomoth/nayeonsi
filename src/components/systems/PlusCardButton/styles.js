import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  PLUS_CARD_BACKGROUND_COLOR,
} from 'constants/color';

const SIZE = 166.7;

const styles = StyleSheet.create({
  card: {
    height: null,
    flexDirection: 'column',
  },
  plusBox: {
    width: SIZE * PixelRatio,
    height: SIZE * PixelRatio,
    borderRadius: 3.3 * PixelRatio,
    borderWidth: 0.7 * PixelRatio,
    borderColor: COLOR,
    backgroundColor: PLUS_CARD_BACKGROUND_COLOR,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    marginTop: 10 * PixelRatio,
    color: COLOR,
    fontSize: 16.8 * PixelRatio,
  },
});

export default styles;
