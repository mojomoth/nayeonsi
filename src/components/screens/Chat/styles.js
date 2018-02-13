import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  CHAT_BACKGROUND_COLOR,
  CHAT_DATE_BACKGROUND_COLOR,
  CHAT_DATE_TEXT_COLOR,
  CHAT_BORDER_COLOR,
  CHAT_YOU_BACKGROUND_COLOR,
  CHAT_ME_BACKGROUND_COLOR,
  CHAT_YOU_TEXT_COLOR,
  CHAT_ME_TEXT_COLOR,
  CHAT_TIME_TEXT_COLOR,
  CHAT_INPUT_BORDER_COLOR,
  CHAT_INPUT_BACKGROUND_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 20 * PixelRatio,
  },
  iconBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  chat: {
    backgroundColor: CHAT_BACKGROUND_COLOR,
  },
  boxes: {
    flex: 1,
    width,
  },
  list: {
    paddingHorizontal: 20 * PixelRatio,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20 * PixelRatio,
  },
  dateBox: {
    width: null,
    height: 30 * PixelRatio,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 19 * PixelRatio,
    borderRadius: 15 * PixelRatio,
    backgroundColor: CHAT_DATE_BACKGROUND_COLOR,
  },
  dateLabel: {
    color: CHAT_DATE_TEXT_COLOR,
    fontSize: 12 * PixelRatio,
  },
  face: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  you: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    marginBottom: 6.7 * PixelRatio,
  },
  me: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    marginBottom: 6.7 * PixelRatio,
  },
  youBox: {
    maxWidth: '78%',
    marginLeft: 52 * PixelRatio,
  },
  meBox: {
    maxWidth: '78%',
  },
  youLabel: {
    paddingHorizontal: 14 * PixelRatio,
    paddingVertical: 10 * PixelRatio,
    borderRadius: 3.3 * PixelRatio,
    backgroundColor: CHAT_YOU_BACKGROUND_COLOR,
    borderColor: CHAT_BORDER_COLOR,
    borderWidth: 0.7 * PixelRatio,
    fontSize: 15.6 * PixelRatio,
    color: CHAT_YOU_TEXT_COLOR,
  },
  meLabel: {
    paddingHorizontal: 14 * PixelRatio,
    paddingVertical: 10 * PixelRatio,
    borderRadius: 3.3 * PixelRatio,
    backgroundColor: CHAT_ME_BACKGROUND_COLOR,
    fontSize: 15.6 * PixelRatio,
    color: CHAT_ME_TEXT_COLOR,
  },
  timeLabel: {
    marginHorizontal: 6.3 * PixelRatio,
    fontSize: 10.2 * PixelRatio,
    color: CHAT_TIME_TEXT_COLOR,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20 * PixelRatio,
    paddingBottom: 20 * PixelRatio,
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 55.3 * PixelRatio,
    paddingHorizontal: 14 * PixelRatio,
    borderRadius: 26.7 * PixelRatio,
    backgroundColor: CHAT_INPUT_BACKGROUND_COLOR,
    borderColor: CHAT_INPUT_BORDER_COLOR,
    borderWidth: 0.7 * PixelRatio,
  },
  textInput: {
    flex: 1,
    fontSize: 15.6 * PixelRatio,
    lineHeight: 20 * PixelRatio,
    color: CHAT_YOU_TEXT_COLOR,
  },
  inputArea: {
    padding: 5 * PixelRatio,
  },
  buttonLabel: {
    fontSize: 18 * PixelRatio,
    color: COLOR,
  },
});

export default styles;
