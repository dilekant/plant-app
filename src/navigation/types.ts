import { BottomTabScreenProps as BottomTabScreenPropsBase } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type OnboardingStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
};

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  OnboardingStackParamList,
  'Welcome'
>;

export type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  OnboardingStackParamList,
  'Onboarding'
>;

export type BottomTabParamList = {
  Home: undefined;
  Diagnose: undefined;
  BarcodeScanning: undefined;
  MyGarden: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  MainApp: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabScreenProps<T extends keyof BottomTabParamList> = BottomTabScreenPropsBase<
  BottomTabParamList,
  T
>;
