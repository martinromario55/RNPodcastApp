import React from 'react';
import MainNavigator from './src/Navigators/MainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStoreProvider} from './src/context/RootStoreContext';
import {rootStore} from './src/stores/RootStore';

const App = () => {
  return (
    <RootStoreProvider rootStore={rootStore}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </RootStoreProvider>
  );
};

export default App;
