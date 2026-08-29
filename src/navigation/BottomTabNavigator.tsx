import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabParamList } from '@/navigation/types';
import { DiagnoseScreen, HomeScreen, MyGardenScreen, ProfileScreen } from '@/screens';
import BarcodeScanningScreen from '@/screens/app/BarcodeScanning/BarcodeScanningScreen';
import { colors, normalizeSize } from '@/styles';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: '600',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inactive,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingBottom: normalizeSize(5),
          paddingTop: normalizeSize(5),
        },
      }}
    >
      <BottomTab.Screen
        component={HomeScreen}
        name="Home"
        options={{
          tabBarLabel: 'Home',
          title: 'Ana Sayfa',
        }}
      />
      <BottomTab.Screen
        component={DiagnoseScreen}
        name="Diagnose"
        options={{
          tabBarLabel: 'Diagnose',
          title: 'Tanı Yap',
        }}
      />
      <BottomTab.Screen
        component={BarcodeScanningScreen}
        name="BarcodeScanning"
        options={{
          tabBarLabel: 'Barcode',
          title: 'Barkod Tara',
        }}
      />
      <BottomTab.Screen
        component={MyGardenScreen}
        name="MyGarden"
        options={{
          tabBarLabel: 'Garden',
          title: 'Bahçem',
        }}
      />
      <BottomTab.Screen
        component={ProfileScreen}
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          title: 'Profil',
        }}
      />
    </BottomTab.Navigator>
  );
}
