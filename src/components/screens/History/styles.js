import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  HISTORY_HEADER_BORDER_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  cards: {
    width,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25 * PixelRatio,
    paddingLeft: 20 * PixelRatio,
    paddingRight: 6 * PixelRatio,
    borderTopWidth: 0.7 * PixelRatio,
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: HISTORY_HEADER_BORDER_COLOR,
  },
  headerLabel: {
    fontSize: 15.3 * PixelRatio,
    color: COLOR,
  },
  list: {
    flexWrap: 'wrap',
    paddingHorizontal: 10 * PixelRatio,
    paddingVertical: 27 * PixelRatio,
  },
  listContainer: {
  },
  trashButton: {
    padding: 14 * PixelRatio,
  },
  card: {
    marginHorizontal: 10 * PixelRatio,
    marginBottom: 20 * PixelRatio,
  },
});

export default styles;
