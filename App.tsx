/**
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';

import { RootNavigator } from '@/navigation/RootNavigator';
import { persistor, store } from '@/store';
import { theme } from '@/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <StatusBar barStyle="dark-content" />
              <RootNavigator />
            </QueryClientProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
