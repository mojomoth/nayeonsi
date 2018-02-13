import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 27 * PixelRatio,
    paddingVertical: 33.3 * PixelRatio,
  },
  card: {
    marginBottom: 34 * PixelRatio,
  },
  floatingPlus: {
    position: 'absolute',
    right: 15 * PixelRatio,
    bottom: 90 * PixelRatio,
  },
});

export default styles;
