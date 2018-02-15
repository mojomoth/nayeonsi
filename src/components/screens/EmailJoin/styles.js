import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { COLOR } from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width,
    paddingLeft: 20 * PixelRatio,
    paddingRight: 20 * PixelRatio,
    paddingTop: 20 * PixelRatio,
    paddingBottom: 20 * PixelRatio,
  },
  textInput: {
    flex: 1,
  },
  loginButton: {
    width: 374 * PixelRatio,
    marginBottom: 26.7 * PixelRatio,
  },
  alarmLabel: {
    color: COLOR,
  },
});

export default styles;
