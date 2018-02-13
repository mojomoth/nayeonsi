import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';

const styles = StyleSheet.create({
  header: {
    paddingTop: 14 * PixelRatio,
    paddingBottom: 14 * PixelRatio,
  },
  panel: {
    width: 374 * PixelRatio,
    height: null,
  },
  scroll: {
    width: '100%',
    height: 200 * PixelRatio,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    overflow: 'hidden',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  attration: {
    width: null,
    height: 40 * PixelRatio,
    paddingLeft: 20 * PixelRatio,
    paddingRight: 20 * PixelRatio,
    marginLeft: 5 * PixelRatio,
    marginRight: 5 * PixelRatio,
    marginBottom: 10 * PixelRatio,
  }, 
  attrationLabel: {
    fontSize: 15.3 * PixelRatio,
  },
  buttonArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10 * PixelRatio,
  },
  addButton: {
    height: 40 * PixelRatio,
    paddingLeft: 20 * PixelRatio,
    paddingRight: 20 * PixelRatio,
  },
  addIcon: {
    width: 14 * PixelRatio,
    height: 14 * PixelRatio,
    marginRight: 5 * PixelRatio,
  },
  addButtonLabel: {
    fontSize: 15.3 * PixelRatio,
  },
});

export default styles;
