import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import PodcastScreen from '../screens/Podcast/PodcastScreen';

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PodcastScreen"
        component={PodcastScreen}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
