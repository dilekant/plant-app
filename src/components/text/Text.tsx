import React from 'react';

import { TEXT_VARIANTS } from './constants';
import { StyledText } from './styles';
import type { TextProps, TextVariant } from './types';

const Text = React.forwardRef<any, TextProps>(
  (
    {
      children,
      variant,
      color,
      fontSize,
      fontWeight,
      textAlign = 'auto',
      lineHeight,
      letterSpacing,
      ...props
    },
    ref
  ) => {
    const variantStyles = variant ? TEXT_VARIANTS[variant] : undefined;

    return (
      <StyledText
        color={color}
        fontSize={fontSize ?? variantStyles?.fontSize ?? 14}
        fontWeight={fontWeight ?? variantStyles?.fontWeight ?? 'normal'}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        ref={ref}
        textAlign={textAlign}
        {...props}
      >
        {children}
      </StyledText>
    );
  }
);

export { Text, TEXT_VARIANTS };
export type { TextProps, TextVariant };
