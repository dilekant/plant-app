/**
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { RootNavigator } from '@/navigation/RootNavigator';
import { theme } from '@/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle="dark-content" />
          <RootNavigator />
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
