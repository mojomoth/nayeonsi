import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  BORDER_HEADER_COLOR,
  POINT_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48.7 * PixelRatio,
    borderColor: BORDER_HEADER_COLOR,
    paddingTop: 10 * PixelRatio,
    paddingBottom: 10 * PixelRatio,
  },
  alarmBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 16.7 * PixelRatio,
  },
  pointBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    paddingRight: 16.7 * PixelRatio,
    paddingVertical: 3 * PixelRatio,
  },
  pointLabel: {
    position: 'relative',
    top: 7 * PixelRatio,
    marginRight: 5.7 * PixelRatio,
    fontSize: 13.2 * PixelRatio,
    color: POINT_COLOR,
    textAlign: 'right',
  },
  titleLabel: {
    flex: 4,
    textAlign: 'center',
  },
});

export default styles;
