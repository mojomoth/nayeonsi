import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR, 
  IMAGE_BOX_BACKGROUND_COLOR,
  IMAGE_BOX_BORDER_COLOR, 
  IMAGE_BOX_INNER_COLOR,
} from 'constants/color';

const styles = StyleSheet.create({
  box: {
  },
  emptyButton: {
    width: '100%',
    height: '100%',
  },
  emptyBox: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: IMAGE_BOX_BACKGROUND_COLOR,
    borderWidth: 0.7 * PixelRatio,
    borderRadius: 3.3 * PixelRatio,
  },
  pictureBox: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: IMAGE_BOX_BACKGROUND_COLOR,
    borderWidth: 0.7 * PixelRatio,
    borderRadius: 3.3 * PixelRatio,
    overflow: 'hidden',
  },
  picture: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  focusBox: {
    borderColor: COLOR,
  },
  grayBox: {
    borderColor: IMAGE_BOX_BORDER_COLOR,
  },
  label: {
    position: 'absolute',
    top: '66.4%',
    left: 0,
    width: '100%',
    fontSize: 15.6 * PixelRatio,
    textAlign: 'center',
  },
  focusLabel: {
    color: COLOR,
  },
  gayLabel: {
    color: IMAGE_BOX_INNER_COLOR,
  },
  deleteButton: {
    position: 'absolute',
    top: -10 * PixelRatio,
    right: -10 * PixelRatio,
  },
});

export default styles;
