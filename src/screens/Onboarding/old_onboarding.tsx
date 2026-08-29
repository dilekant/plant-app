import { useNavigation } from '@react-navigation/native';

import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  Content,
  Description,
  SecondaryButton,
  SecondaryButtonText,
  Title,
} from './styles';

import { OnboardingScreenNavigationProp } from '@/navigation/types';
import { storageUtils } from '@/utils/storageUtils';

const Onboarding = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const handleGetStarted = async () => {
    await storageUtils.setOnboardingCompleted();
    // Navigation will automatically switch to MainApp stack
  };

  return (
    <Container>
      <Content>
        <Title>Başlamaya Hazır Mısınız?</Title>
        <Description>
          Şimdi başlayın ve bitki bakım uzmanı olun. Öğretici ve ipuçları ile rehberlik alacaksınız.
        </Description>
      </Content>

      <ButtonContainer>
        <SecondaryButton onPress={() => navigation.goBack()}>
          <SecondaryButtonText>Geri</SecondaryButtonText>
        </SecondaryButton>
        <Button onPress={handleGetStarted}>
          <ButtonText>Başla</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Onboarding;
