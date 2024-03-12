import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';

const MainNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
