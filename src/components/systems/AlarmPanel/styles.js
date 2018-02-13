import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
} from 'constants/color';

const styles = StyleSheet.create({
  alarm: {
    height: 78.7 * PixelRatio,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20 * PixelRatio,
    paddingRight: 20 * PixelRatio,
    backgroundColor: COLOR,
  },
  label: {
    flex: 1,
    padding: 10 * PixelRatio,
  },
  icon: {

  },
  close: {

  },
});

export default styles;
