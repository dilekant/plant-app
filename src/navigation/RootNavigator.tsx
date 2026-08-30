import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import BottomTabNavigator from '@/navigation/BottomTabNavigator';
import { OnboardingNavigator } from '@/navigation/OnboardingNavigator';
import { RootStackParamList } from '@/navigation/types';
import { RootState } from '@/store';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const isOnboardingCompleted = useSelector((state: RootState) => state.onboarding.completed);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isOnboardingCompleted ? (
          <RootStack.Screen component={OnboardingNavigator} name="Onboarding" />
        ) : (
          <RootStack.Screen component={BottomTabNavigator} name="MainApp" />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
