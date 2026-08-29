import { TextProps as RNTextProps } from 'react-native';

import { TEXT_VARIANTS } from './Text';

export interface TextProps extends RNTextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  lineHeight?: number;
  letterSpacing?: number;
}

export type TextVariant = keyof typeof TEXT_VARIANTS;
