/**
 * @format
 */

import React from 'react';

import ReactTestRenderer from 'react-test-renderer';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
  setItem: jest.fn(() => Promise.resolve()),
}));

jest.mock('react-native-reanimated', () => {
  const { View } = require('react-native');

  return {
    __esModule: true,
    default: { FlatList: require('react-native').FlatList, View },
    interpolateColor: () => '#ffffff',
    useAnimatedScrollHandler: (handlers: { onScroll: (event: unknown) => void }) =>
      handlers.onScroll,
    useAnimatedStyle: (updater: () => object) => updater(),
    useSharedValue: (value: number) => ({ value }),
  };
});

import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
