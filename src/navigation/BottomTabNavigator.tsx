import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

import { TabBarIconContainer } from './styles';

import {
  BarcodeIcon,
  DiagnoseIcon,
  HomeIcon,
  MyGardenIcon,
  ProfileIcon,
} from '@/assets/svgs/icons';
import { BottomTabParamList } from '@/navigation/types';
import { BarcodeScanning, Diagnose, Home, MyGarden, Profile } from '@/screens';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const { normalizeSize, colors } = useTheme();

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
        component={Home}
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <HomeIcon color={color} height={size} width={size} />,
          title: 'Ana Sayfa',
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        component={Diagnose}
        name="Diagnose"
        options={{
          tabBarLabel: 'Diagnose',
          tabBarIcon: ({ color, size }) => (
            <DiagnoseIcon color={color} height={size} width={size} />
          ),
          title: 'Tanı Yap',
        }}
      />
      <BottomTab.Screen
        component={BarcodeScanning}
        name="BarcodeScanning"
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <TabBarIconContainer>
              <BarcodeIcon
                color={colors.white}
                height={normalizeSize(25)}
                width={normalizeSize(25)}
              />
            </TabBarIconContainer>
          ),
          tabBarIconStyle: { marginTop: -normalizeSize(21) },
          title: 'Barkod Tara',
        }}
      />
      <BottomTab.Screen
        component={MyGarden}
        name="MyGarden"
        options={{
          tabBarLabel: 'Garden',
          tabBarIcon: ({ color, size }) => (
            <MyGardenIcon color={color} height={size} width={size} />
          ),
          title: 'Bahçem',
        }}
      />
      <BottomTab.Screen
        component={Profile}
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <ProfileIcon color={color} height={size} width={size} />,
          title: 'Profil',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
