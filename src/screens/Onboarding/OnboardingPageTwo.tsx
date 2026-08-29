import { OnboardingIllustrationPage } from './components/OnboardingIllustrationPage';

import images from '@/assets/images';
import { Text } from '@/components';

const OnboardingPageTwo = () => {
  return (
    <OnboardingIllustrationPage
      image={images.onboardingOne}
      title={
        <>
          Get plant <Text variant="headingExtraBold">care guides</Text>
        </>
      }
    />
  );
};

export { OnboardingPageTwo };
