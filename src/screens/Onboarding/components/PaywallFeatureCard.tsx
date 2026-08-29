import { View } from 'react-native';

import { FeaturesContentContainer } from '../styles';
import type { PayFeature } from '../types';

import { Text } from '@/components';
import { useTheme } from '@/styles';

interface PaywallFeatureCardProps {
  feature: PayFeature;
}

const PaywallFeatureCard = ({ feature }: PaywallFeatureCardProps) => {
  const { colors, normalizeSize } = useTheme();
  const Icon = feature.icon;

  return (
    <FeaturesContentContainer>
      <Icon height={normalizeSize(36)} width={normalizeSize(36)} />
      <View>
        <Text color={colors.white} variant="subtitle">
          {feature.title}
        </Text>
        <Text color={colors.white} variant="bodySmall">
          {feature.description}
        </Text>
      </View>
    </FeaturesContentContainer>
  );
};

export { PaywallFeatureCard };
