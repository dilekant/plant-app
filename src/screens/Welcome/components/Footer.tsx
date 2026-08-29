import { useTheme } from 'styled-components/native';

import { FooterTextContainer } from './styles';

import { Text } from '@/components';

const Footer = () => {
  const { colors } = useTheme();

  return (
    <FooterTextContainer>
      <Text color={colors.primaryOpacity} style={{ textAlign: 'center' }} variant="label">
        By tapping next, you are agreeing to PlantID{' '}
        <Text
          color={colors.primaryOpacity}
          style={{ textDecorationLine: 'underline' }}
          variant="label"
        >
          Terms of Use{' '}
        </Text>
        &
        <Text
          color={colors.primaryOpacity}
          style={{ textDecorationLine: 'underline' }}
          variant="label"
        >
          {' '}
          Privacy Policy.
        </Text>
      </Text>
    </FooterTextContainer>
  );
};

export default Footer;
