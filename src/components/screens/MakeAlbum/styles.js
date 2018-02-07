import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  CONTENT_HEADER_BACKGROUND_COLOR,
  CONTENT_HEADER_BORDER_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width,
  },
  boxes: {
    paddingLeft: 20 * PixelRatio,
    paddingRight: 20 * PixelRatio,
    paddingTop: 20 * PixelRatio,
    paddingBottom: 20 * PixelRatio,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentHeader: {
    padding: 20 * PixelRatio,
    backgroundColor: CONTENT_HEADER_BACKGROUND_COLOR,
    borderColor: CONTENT_HEADER_BORDER_COLOR,
    borderBottomWidth: 0.7 * PixelRatio,
  },
  contentHeaderLabel: {
    textAlign: 'center',
  },
  smallBoxes1: {
    marginLeft: 13 * PixelRatio,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  smallBoxes2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13 * PixelRatio,
  },
});

export default styles;
