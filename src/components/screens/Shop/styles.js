import { StyleSheet } from 'react-native';
import { PixelRatio } from 'constants/size';
import { 
  COLOR,
  BLACK_COLOR,
  BORDER_BOTTOM_COLOR,
  SHOP_POINT_BACKGROUND,
  POINT_INFO_FONT_COLOR,
} from 'constants/color';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  pointBox: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 45 * PixelRatio,
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: BORDER_BOTTOM_COLOR,
    backgroundColor: SHOP_POINT_BACKGROUND,
  },
  pointTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10 * PixelRatio,
  },
  pointLogo: {
    width: 42.7 * PixelRatio,
    marginRight: 10 * PixelRatio,
    resizeMode: 'contain',
  },
  pointLabel: {
    fontSize: 44.4 * PixelRatio,
    lineHeight: 70 * PixelRatio,
    color: COLOR,
  },
  pointInfoLabel: {
    marginTop: -15 * PixelRatio,
    fontSize: 16.8 * PixelRatio,
    color: POINT_INFO_FONT_COLOR,
  },
  scroll: {
    width,
  },
  itemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20 * PixelRatio,
    paddingVertical: 10 * PixelRatio,
    borderBottomWidth: 0.7 * PixelRatio,
    borderColor: BORDER_BOTTOM_COLOR,
  },
  itemLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  itemPoint: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemDiscount: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemLogoIcon: {
    width: 24 * PixelRatio,
    resizeMode: 'contain',
    marginRight: 5.7 * PixelRatio,
  },
  itemPointLabel: {
    fontSize: 30 * PixelRatio,
    lineHeight: 35 * PixelRatio,
    color: COLOR,
    fontWeight: 'bold',
  },
  itemDiscountBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80 * PixelRatio,
    height: 23.3 * PixelRatio,
    borderRadius: 23.3 * 0.5 * PixelRatio,
    borderWidth: 0.7 * PixelRatio,
    borderColor: COLOR,
  },
  itemDiscountLabel: {
    fontSize: 13.2 * PixelRatio,
    color: COLOR,
  },
  itemCostLabel: {
    fontSize: 15.3 * PixelRatio,
    color: BLACK_COLOR,
  },
});

export default styles;
