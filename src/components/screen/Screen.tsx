import React from 'react';

import { ActivityIndicator, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../button';

import {
  ButtonContainer,
  LoadingContainer,
  ScreenContainer,
  ScreenContent,
  ScreenScrollView,
} from './styles';

import { useTheme } from '@/theme';

interface ScreenProps extends Omit<ViewProps, 'children'> {
  children: React.ReactNode;
  isScreenLoading?: boolean;
  primaryButton?: {
    text: string;
    onPress: () => void;
    disabled?: boolean;
    backgroundColor?: string;
    textColor?: string;
  };
  footerComponent?: React.ReactNode;
  scrollable?: boolean;
  loadingIndicatorColor?: string;
  buttonContainerStyle?: ViewProps['style'];
  buttonContainerBackground?: React.ReactNode;
  contentContainerStyle?: ViewProps['style'];
}

const Screen = React.forwardRef<any, ScreenProps>(
  (
    {
      children,
      isScreenLoading = false,
      primaryButton,
      footerComponent,
      scrollable = true,
      loadingIndicatorColor,
      buttonContainerStyle,
      buttonContainerBackground,
      contentContainerStyle,
      ...props
    },
    ref
  ) => {
    const insets = useSafeAreaInsets();
    const { colors } = useTheme();

    if (isScreenLoading) {
      return (
        <ScreenContainer insetBottom={insets.bottom} insetTop={insets.top} ref={ref} {...props}>
          <LoadingContainer>
            <ActivityIndicator color={loadingIndicatorColor || colors.primary} size="large" />
          </LoadingContainer>
        </ScreenContainer>
      );
    }

    const content = scrollable ? (
      <ScreenScrollView
        contentContainerStyle={[
          {
            flexGrow: 1,
            paddingBottom: primaryButton ? insets.bottom + 55 : insets.bottom,
          },
          contentContainerStyle,
        ]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScreenScrollView>
    ) : (
      <ScreenContent hasButton={!!primaryButton} insetBottom={insets.bottom}>
        {children}
      </ScreenContent>
    );

    return (
      <ScreenContainer insetBottom={insets.bottom} insetTop={insets.top} ref={ref} {...props}>
        {content}

        {(primaryButton || footerComponent) && (
          <ButtonContainer insetBottom={insets.bottom} style={buttonContainerStyle}>
            {buttonContainerBackground}
            {primaryButton && (
              <Button
                backgroundColor={primaryButton.backgroundColor}
                disabled={primaryButton.disabled}
                onPress={primaryButton.onPress}
                text={primaryButton.text}
                textColor={primaryButton.textColor}
              />
            )}
            {footerComponent}
          </ButtonContainer>
        )}
      </ScreenContainer>
    );
  }
);

export { Screen };
