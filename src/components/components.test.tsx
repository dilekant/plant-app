import React from 'react';

import { ActivityIndicator, Image as RNImage, TextInput } from 'react-native';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import Button from './button/Button';
import { Image } from './image/Image';
import { PremiumCard } from './premium-card/PremiumCard';
import { Screen } from './screen/Screen';
import { SearchInput } from './search-input/SearchInput';
import { Text } from './text/Text';

import { theme } from '@/theme';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ bottom: 12, top: 8 }),
}));

jest.mock('@/assets/svgs/icons', () => {
  const { View } = require('react-native');

  return {
    ArrowRightIcon: View,
    MessageIcon: View,
    SearchIcon: View,
  };
});

const render = (component: React.ReactElement) => {
  let tree: ReactTestRenderer.ReactTestRenderer;

  ReactTestRenderer.act(() => {
    tree = ReactTestRenderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  });

  return tree!;
};

describe('components', () => {
  it('renders text content', () => {
    const tree = render(<Text variant="bodyBold">Plant name</Text>);

    expect(tree.toJSON()).toMatchObject({ children: ['Plant name'] });
  });

  it('renders an image with the supplied source', () => {
    const source = { uri: 'https://example.com/plant.png' };
    const tree = render(<Image source={source} testID="plant-image" />);

    expect(tree.root.findByType(RNImage).props.source).toEqual(source);
  });

  it('calls a button press handler', () => {
    const onPress = jest.fn();
    const tree = render(<Button onPress={onPress} testID="save-button" text="Save" />);

    tree.root.findByProps({ testID: 'save-button' }).props.onPress();

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('renders the search placeholder and forwards input changes', () => {
    const onChangeText = jest.fn();
    const tree = render(
      <SearchInput onChangeText={onChangeText} placeholder="Search plants" testID="plant-search" />
    );
    const input = tree.root.findByType(TextInput);

    expect(input.props.placeholder).toBe('Search plants');
    input.props.onChangeText('Monstera');
    expect(onChangeText).toHaveBeenCalledWith('Monstera');
  });

  it('renders premium upgrade copy', () => {
    const tree = render(<PremiumCard />);

    expect(JSON.stringify(tree.toJSON())).toContain('FREE Premium Available');
    expect(JSON.stringify(tree.toJSON())).toContain('Tap to upgrade your account!');
  });

  it('shows a loading indicator while a screen is loading', () => {
    const tree = render(
      <Screen isScreenLoading>
        <Text>Plant list</Text>
      </Screen>
    );

    expect(tree.root.findByType(ActivityIndicator)).toBeTruthy();
  });

  it('renders a primary screen button and calls its handler', () => {
    const onPress = jest.fn();
    const tree = render(
      <Screen primaryButton={{ onPress, text: 'Continue' }} scrollable={false}>
        <Text>Plant list</Text>
      </Screen>
    );

    tree.root.findByType(Button).props.onPress();

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
