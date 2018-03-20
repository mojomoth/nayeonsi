import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  BLACK_COLOR,
  WHITE_COLOR,
  EVENT_BACKGROUND_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width,
    backgroundColor: EVENT_BACKGROUND_COLOR,
  },
  article: {
    width,
    height: 204 * PixelRatio,
    backgroundColor: BLACK_COLOR,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  end: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  endBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: BLACK_COLOR,
    opacity: 0.5,
  },
  endLabel: {
    marginTop: 5 * PixelRatio,
    fontSize: 16.7 * PixelRatio,
    color: WHITE_COLOR,
  },
});

export default styles;
