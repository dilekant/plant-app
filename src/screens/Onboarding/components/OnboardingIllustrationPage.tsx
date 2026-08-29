import type { ReactNode } from 'react';

import type { ImageSourcePropType } from 'react-native';

import { HeaderTextContainer } from '../styles';

import { Image, Screen, Text } from '@/components';
import { useTheme } from '@/styles/useTheme';

interface OnboardingIllustrationPageProps {
  image: ImageSourcePropType;
  title: ReactNode;
}

const OnboardingIllustrationPage = ({ image, title }: OnboardingIllustrationPageProps) => {
  const { normalizeSize } = useTheme();

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      <HeaderTextContainer>
        <Text variant="headingMedium">{title}</Text>
      </HeaderTextContainer>
      <Image source={image} style={{ height: normalizeSize(650), width: '100%' }} />
    </Screen>
  );
};

export { OnboardingIllustrationPage };
