import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingStackParamList } from '@/navigation/types';
import Onboarding from '@/screens/Onboarding/Onboarding';
import WelcomeScreen from '@/screens/Welcome/Welcome';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

export function OnboardingNavigator() {
  return (
    <OnboardingStack.Navigator
      animationEnabled
      screenOptions={{
        animationEnabled: true,
        headerShown: false,
      }}
    >
      <OnboardingStack.Screen component={WelcomeScreen} name="Welcome" />
      <OnboardingStack.Screen component={Onboarding} name="Onboarding" />
    </OnboardingStack.Navigator>
  );
}
