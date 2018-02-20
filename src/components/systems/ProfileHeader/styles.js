import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  BORDER_HEADER_COLOR,
  BLACK_COLOR,
  COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4.3 * PixelRatio,
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: BORDER_HEADER_COLOR,
  },
  backBox: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  faceBox: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  face: {
    borderWidth: 0.7 * PixelRatio,
    borderColor: COLOR,
  },
  name: {
    fontSize: 18 * PixelRatio,
    color: BLACK_COLOR,
    paddingLeft: 13 * PixelRatio,
  },
  icon: {
    paddingHorizontal: 20 * PixelRatio,
  },
  iconBack: {
    paddingHorizontal: 10 * PixelRatio,
  },
  iconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default styles;
