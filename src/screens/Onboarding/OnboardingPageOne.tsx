import { OnboardingIllustrationPage } from './components/OnboardingIllustrationPage';

import images from '@/assets/images';
import { Text } from '@/components';

const OnboardingPageOne = () => {
  return (
    <OnboardingIllustrationPage
      image={images.onboardingOne}
      title={
        <>
          Take a photo to <Text variant="headingExtraBold">identify</Text> the plant!
        </>
      }
    />
  );
};

export { OnboardingPageOne };
