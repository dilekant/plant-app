import { View } from 'react-native';

import {
  PlanDiscountContainer,
  PlansContainer,
  PlansSelectedCircle,
  PlansSelectedCircleContainer,
} from '../styles';
import type { PayPlan } from '../types';

import { Text } from '@/components';
import { useTheme } from '@/styles';

interface PaywallPlanOptionProps {
  isSelected: boolean;
  onPress: (plan: PayPlan) => void;
  plan: PayPlan;
}

const PaywallPlanOption = ({ isSelected, onPress, plan }: PaywallPlanOptionProps) => {
  const { colors } = useTheme();

  return (
    <PlansContainer
      activeOpacity={0.7}
      isDiscount={!!plan.discount}
      isSelected={isSelected}
      onPress={() => onPress(plan)}
    >
      <PlansSelectedCircleContainer isSelected={isSelected}>
        {isSelected && <PlansSelectedCircle />}
      </PlansSelectedCircleContainer>
      <View>
        <Text color={colors.white} variant="bodyLargeMedium">
          {plan.title}
        </Text>
        <Text color={colors.white} variant="captionLight">
          {plan.description}
        </Text>
      </View>
      {isSelected && plan.discount && (
        <PlanDiscountContainer>
          <Text color={colors.white} variant="captionMedium">
            {`Save ${plan.discount}%`}
          </Text>
        </PlanDiscountContainer>
      )}
    </PlansContainer>
  );
};

export { PaywallPlanOption };
