import { useRef, useState } from 'react';

import { FlatList, ListRenderItemInfo } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { PaywallFeatureCard, PaywallPlanOption } from '../components';
import { payFeatures, payPlans } from '../constants';
import { ContentContainer, FeaturesContainer, TextContainer } from '../styles';

import images from '@/assets/images';
import { CloseIcon } from '@/assets/svgs/icons';
import { Image, Screen, Text } from '@/components';
import { completeOnboarding } from '@/store/onboardingSlice';
import { useTheme } from '@/theme';

const PaywallPage = () => {
  const dispatch = useDispatch();

  const { normalizeSize, colors } = useTheme();
  const insets = useSafeAreaInsets();

  const flatListRef = useRef<FlatList<(typeof payPlans)[number]>>(null);

  const [selectedPlan, isSetSelectedPlan] = useState(payPlans[0]);

  const handleCompleteOnboarding = () => dispatch(completeOnboarding());

  const renderItem = ({ item }: ListRenderItemInfo<(typeof payPlans)[number]>) => (
    <PaywallPlanOption
      isSelected={selectedPlan.id === item.id}
      onPress={isSetSelectedPlan}
      plan={item}
    />
  );

  return (
    <Screen
      scrollable={false}
      style={{
        paddingHorizontal: 0,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: colors.primaryBackground,
      }}
    >
      <Image
        source={images.onboardingPaywall}
        style={{
          height: normalizeSize(490),
          width: '100%',
          position: 'absolute',
        }}
      />
      <CloseIcon
        height={normalizeSize(24)}
        onPress={handleCompleteOnboarding}
        style={{
          position: 'absolute',
          top: insets.top + normalizeSize(8),
          right: normalizeSize(19),
        }}
        width={normalizeSize(24)}
      />
      <ContentContainer insetTop={insets.top}>
        <TextContainer>
          <Text color={colors.white} variant="display">
            PlantApp{' '}
            <Text color={colors.white} variant="headingLight">
              Premium
            </Text>
          </Text>
          <Text color={colors.white} variant="bodyLargeLight">
            Access All Features
          </Text>
        </TextContainer>
        <FeaturesContainer horizontal showsHorizontalScrollIndicator={false}>
          {payFeatures.map((feature) => (
            <PaywallFeatureCard feature={feature} key={feature.title} />
          ))}
        </FeaturesContainer>
        <FlatList
          data={payPlans}
          keyExtractor={(_, index) => index.toString()}
          ref={flatListRef}
          renderItem={renderItem}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingHorizontal: normalizeSize(24),
          }}
        />
      </ContentContainer>
    </Screen>
  );
};

export default PaywallPage;
