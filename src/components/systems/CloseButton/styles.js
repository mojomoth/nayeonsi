import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 20 * PixelRatio,
    right: 20 * PixelRatio,
  },
});

export default styles;
