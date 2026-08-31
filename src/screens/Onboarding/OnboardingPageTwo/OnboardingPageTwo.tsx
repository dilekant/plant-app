import { OnboardingIllustrationPage } from '../components';
import { BoldTextContainer, BrushTextContainer } from '../styles';

import images from '@/assets/images';
import { Image, Text } from '@/components';
import { useTheme } from '@/theme/useTheme';

const OnboardingPageTwo = () => {
  const { normalizeSize } = useTheme();
  return (
    <OnboardingIllustrationPage
      image={images.onboardingTwo}
      title={
        <BrushTextContainer>
          <Text variant="headingMedium">Get plant </Text>
          <BoldTextContainer>
            <Text variant="headingExtraBold">care guides</Text>
            <Image
              source={images.brushLarge}
              style={{
                height: normalizeSize(30),
                width: normalizeSize(155),
                position: 'absolute',
                top: 32,
                right: 10,
              }}
            />
          </BoldTextContainer>
        </BrushTextContainer>
      }
    />
  );
};

export default OnboardingPageTwo;
