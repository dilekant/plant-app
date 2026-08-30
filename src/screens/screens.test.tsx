import React from 'react';

import { FlatList } from 'react-native';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import Onboarding from './Onboarding/Onboarding';
import OnboardingPageOne from './Onboarding/OnboardingPageOne/OnboardingPageOne';
import OnboardingPageTwo from './Onboarding/OnboardingPageTwo/OnboardingPageTwo';
import PaywallPage from './Onboarding/PaywallPage/PaywallPage';
import Welcome from './Welcome/Welcome';
import BarcodeScanning from './app/BarcodeScanning/BarcodeScanning';
import Diagnose from './app/Diagnose/Diagnose';
import Home from './app/Home/Home';
import MyGarden from './app/MyGarden/MyGarden';
import Profile from './app/Profile/Profile';

import Button from '@/components/button/Button';
import { theme } from '@/theme';

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockNavigate }),
}));

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ bottom: 12, top: 8 }),
}));

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('@/assets/svgs/icons', () => {
  const { View } = require('react-native');

  return {
    ArrowRightIcon: View,
    CloseIcon: View,
    FasterIcon: View,
    MessageIcon: View,
    SearchIcon: View,
    UnlimitedIcon: View,
  };
});

jest.mock('./app/Home/actions/getQuestions', () => ({
  useGetQuestionsQuery: () => ({ data: [], isLoading: false }),
}));

jest.mock('./app/Home/actions/getCategories', () => ({
  useGetCategoriesQuery: () => ({ data: { data: [] }, isLoading: false }),
}));

const render = (component: React.ReactElement) => {
  let tree: ReactTestRenderer.ReactTestRenderer;

  ReactTestRenderer.act(() => {
    tree = ReactTestRenderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  });

  return tree!;
};

const renderedText = (tree: ReactTestRenderer.ReactTestRenderer) => JSON.stringify(tree.toJSON());

describe('screens', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('navigates from the welcome page to onboarding', () => {
    const tree = render(<Welcome />);

    ReactTestRenderer.act(() => {
      tree.root.findByType(Button).props.onPress();
    });

    expect(mockNavigate).toHaveBeenCalledWith('Onboarding');
  });

  it('renders all onboarding pages in its carousel', () => {
    const tree = render(<Onboarding />);
    const carousel = tree.root.findByType(FlatList);

    expect(carousel.props.data).toHaveLength(3);
    expect(renderedText(tree)).toContain('Continue');
  });

  it('renders the first onboarding message', () => {
    expect(renderedText(render(<OnboardingPageOne />))).toContain('identify');
  });

  it('renders the second onboarding message', () => {
    expect(renderedText(render(<OnboardingPageTwo />))).toContain('care guides');
  });

  it('renders the premium paywall', () => {
    const tree = render(<PaywallPage />);

    expect(renderedText(tree)).toContain('PlantApp');
    expect(renderedText(tree)).toContain('Access All Features');
  });

  it('renders the home page with empty API results', () => {
    const tree = render(<Home />);

    expect(renderedText(tree)).toContain('Hi, plant lover!');
    expect(tree.root.findAllByType(FlatList)).toHaveLength(2);
  });

  it.each([
    ['BarcodeScanning', BarcodeScanning],
    ['Diagnose', Diagnose],
    ['MyGarden', MyGarden],
    ['Profile', Profile],
  ])('renders the %s page', (_, Page) => {
    expect(renderedText(render(<Page />))).toContain('Welcome to PlantApp!');
  });
});
