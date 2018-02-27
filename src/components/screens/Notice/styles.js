import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  BLACK_COLOR,
  NOTICE_BACKGROUND_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width,
    backgroundColor: NOTICE_BACKGROUND_COLOR,
  },
});

export default styles;
