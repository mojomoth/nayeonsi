import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  ROOM_NAME_COLOR,
  ROOM_TEXT_COLOR,
  ROOM_INFO_COLOR,
  ROOM_DATE_COLOR,
  BORDER_BOTTOM_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  room: {
    width,
    flexDirection: 'row',
    paddingVertical: 14 * PixelRatio,
    paddingHorizontal: 20 * PixelRatio,
    alignItems: 'center',
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: BORDER_BOTTOM_COLOR,
  },
  face: {
  },
  body: {
    flex: 4,
    marginLeft: 13.3 * PixelRatio,
  },
  dateBox: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 16.7 * PixelRatio,
    color: ROOM_NAME_COLOR,
    marginBottom: 9.7 * PixelRatio,
  },
  text: {
    flex: 1,
    fontSize: 13.3 * PixelRatio,
    color: ROOM_TEXT_COLOR,
  },
  info: {
    fontSize: 13.3 * PixelRatio,
    color: ROOM_INFO_COLOR,
  },
  date: {
    fontSize: 12 * PixelRatio,
    color: ROOM_DATE_COLOR,
    textAlign: 'right',
  },
});

export default styles;
