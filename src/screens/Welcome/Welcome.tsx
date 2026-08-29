import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { Footer } from './components/Footer';
import { HeaderTextContainer } from './styles';

import images from '@/assets/images';
import { Image, Screen, Text } from '@/components';
import { WelcomeScreenNavigationProp } from '@/navigation/types';

const Welcome = () => {
  const { navigate } = useNavigation<WelcomeScreenNavigationProp>();
  const { colors } = useTheme();

  return (
    <Screen
      footerComponent={<Footer />}
      primaryButton={{ text: 'Get Started', onPress: () => navigate('Onboarding') }}
      style={{ paddingHorizontal: 0 }}
    >
      <HeaderTextContainer>
        <Text variant={'heading'}>
          Welcome to <Text variant={'display'}>PlantApp</Text>
        </Text>
        <Text color={colors.primaryOpacity} variant={'bodyLarge'}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </HeaderTextContainer>
      <Image source={images.welcome} />
    </Screen>
  );
};

export default Welcome;
