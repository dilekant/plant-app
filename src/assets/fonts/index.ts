import { Platform } from 'react-native';

export const FONT_FAMILY = {
  rubik: Platform.select({
    android: 'Rubik-VariableFont_wght',
    default: 'Rubik',
  }),
} as const;
