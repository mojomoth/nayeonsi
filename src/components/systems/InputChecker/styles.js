import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { COLOR } from 'constants/color';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    alignSelf: 'center',
  },
  alarmLabel: {
    color: COLOR,
    fontSize: PixelRatio * 15.6,
  },
});

export default styles;
