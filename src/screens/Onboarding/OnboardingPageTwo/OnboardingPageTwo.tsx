import { OnboardingIllustrationPage } from '../components';

import images from '@/assets/images';
import { Text } from '@/components';

const OnboardingPageTwo = () => {
  return (
    <OnboardingIllustrationPage
      image={images.onboardingTwo}
      title={
        <>
          Get plant <Text variant="headingExtraBold">care guides</Text>
        </>
      }
    />
  );
};

export default OnboardingPageTwo;
