import React from 'react';

import { useTheme } from 'styled-components/native';

import { Text } from '../text';

import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

const Button = React.forwardRef<any, ButtonProps>(
  (
    {
      text,
      onPress,
      disabled = false,
      backgroundColor,
      textColor,
      textVariant = 'bodyBold',
      paddingVertical = 14,
      borderRadius = 8,
      textProps,
      ...props
    },
    ref
  ) => {
    const { colors } = useTheme();
    return (
      <ButtonContainer
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        disabled={disabled}
        onPress={onPress}
        paddingVertical={paddingVertical}
        ref={ref}
        {...props}
      >
        <Text
          color={textColor || colors.white}
          textAlign="center"
          variant={textVariant}
          {...textProps}
        >
          {text}
        </Text>
      </ButtonContainer>
    );
  }
);

export default Button;
