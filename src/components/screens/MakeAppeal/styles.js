import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width,
    paddingLeft: 20 * PixelRatio,
    paddingRight: 20 * PixelRatio,
    paddingTop: 20 * PixelRatio,
    paddingBottom: 20 * PixelRatio,
  },
});

export default styles;
