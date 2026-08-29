import { Dimensions } from 'react-native';

import { colors } from './colors';

const BASE_WIDTH = 375;
const { width } = Dimensions.get('window');

export const normalizeSize = (size: number) => Math.round((width / BASE_WIDTH) * size);

export { colors };

export type AppTheme = {
  colors: typeof colors;
  normalizeSize: typeof normalizeSize;
};

export const theme: AppTheme = { colors, normalizeSize };

export const useTheme = () => theme;
