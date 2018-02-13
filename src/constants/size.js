import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const BASE_WIDTH = 414;

export const PixelRatio = width / BASE_WIDTH;
export const Width = width;
