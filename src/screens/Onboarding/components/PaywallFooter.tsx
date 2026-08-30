import { useTheme } from 'styled-components/native';

import { FooterTextContainer } from './styles';

import { Text } from '@/components';

const PaywallFooter = () => {
  const { colors } = useTheme();

  return (
    <FooterTextContainer>
      <Text color={colors.whiteOpacity52} style={{ textAlign: 'center' }} variant="overline">
        After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel
        before the trial expires. Yearly Subscription is Auto-Renewable
      </Text>
      <Text color={colors.whiteOpacity52} variant="label">
        Terms • Privacy • Restore
      </Text>
    </FooterTextContainer>
  );
};

export { PaywallFooter };
