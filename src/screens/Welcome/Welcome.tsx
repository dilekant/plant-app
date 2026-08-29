import { useNavigation } from '@react-navigation/native';

import { Footer, Header } from './components';

import images from '@/assets/images';
import { Image, Screen } from '@/components';
import { WelcomeScreenNavigationProp } from '@/navigation/types';

const Welcome = () => {
  const { navigate } = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <Screen
      footerComponent={<Footer />}
      primaryButton={{ text: 'Get Started', onPress: () => navigate('Onboarding') }}
      style={{ paddingHorizontal: 0 }}
    >
      <Header />
      <Image source={images.welcome} />
    </Screen>
  );
};

export default Welcome;
