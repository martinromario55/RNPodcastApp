import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LibraryScreen from '../screens/Library/LibraryScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import HomeNavigator from './HomeNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIconStyle: {display: 'none'},
          tabBarLabelStyle: {
            margin: 10,
            fontSize: 17,
            fontWeight: 'bold',
          },
          title: 'Listen Now',
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIconStyle: {display: 'none'},
          tabBarLabelStyle: {
            margin: 10,
            fontSize: 17,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIconStyle: {display: 'none'},
          tabBarLabelStyle: {
            margin: 10,
            fontSize: 17,
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
