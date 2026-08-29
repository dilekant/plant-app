import { PressableProps } from 'react-native';

import { TextProps, TextVariant } from '../text';

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  textVariant?: TextVariant;
  fontSize?: number;
  paddingVertical?: number;
  borderRadius?: number;
  textProps?: Omit<TextProps, 'children' | 'color' | 'variant'>;
}
