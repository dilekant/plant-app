import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from '@/navigation/BottomTabNavigator';
import { OnboardingNavigator } from '@/navigation/OnboardingNavigator';
import { RootStackParamList } from '@/navigation/types';
import { storageUtils } from '@/utils/storageUtils';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const completed = await storageUtils.checkOnboardingCompleted();
        setIsOnboardingCompleted(completed);
      } catch (_error) {
        // Handle error silently in production
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  // Polling mechanism to check if onboarding is completed
  // This ensures that when AsyncStorage is updated, the state is refreshed
  useEffect(() => {
    if (isOnboardingCompleted) {
      return; // No need to poll if already completed
    }

    const interval = setInterval(async () => {
      try {
        const completed = await storageUtils.checkOnboardingCompleted();
        if (completed) {
          setIsOnboardingCompleted(true);
        }
      } catch (_error) {
        // Handle error silently in production
      }
    }, 500); // Check every 500ms

    return () => clearInterval(interval);
  }, [isOnboardingCompleted]);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          animationEnabled: true,
          headerShown: false,
        }}
      >
        {!isOnboardingCompleted ? (
          <RootStack.Screen
            component={OnboardingNavigator}
            name="Onboarding"
            options={{
              animationEnabled: false,
            }}
          />
        ) : (
          <RootStack.Screen component={BottomTabNavigator} name="MainApp" />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
