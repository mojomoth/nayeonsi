import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { COLOR, LIGHTGRAY_COLOR } from 'constants/color';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    alignSelf: 'center',
  },
  placeholder: {
    flex: 1,
    alignSelf: 'center',
    color: LIGHTGRAY_COLOR,
  },
  alarmLabel: {
    color: COLOR,
    fontSize: PixelRatio * 15.6,
  },
});

export default styles;
