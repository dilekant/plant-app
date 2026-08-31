import { OnboardingIllustrationPage } from '../components';
import { BoldTextContainer, BrushTextContainer } from '../styles';

import images from '@/assets/images';
import { Image, Text } from '@/components';
import { useTheme } from '@/theme/useTheme';

const OnboardingPageOne = () => {
  const { normalizeSize } = useTheme();

  return (
    <OnboardingIllustrationPage
      image={images.onboardingOne}
      title={
        <BrushTextContainer>
          <Text variant="headingMedium">Take a photo to </Text>
          <BoldTextContainer>
            <Text variant="headingExtraBold">identify</Text>
            <Image
              source={images.brush}
              style={{
                height: normalizeSize(30),
                width: normalizeSize(142),
                position: 'absolute',
                top: 28,
                right: -12,
              }}
            />
          </BoldTextContainer>
          <Text variant="headingMedium">the plant!</Text>
        </BrushTextContainer>
      }
    />
  );
};

export default OnboardingPageOne;
