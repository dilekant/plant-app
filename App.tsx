/**
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { RootNavigator } from '@/navigation/RootNavigator';
import { theme } from '@/theme';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
