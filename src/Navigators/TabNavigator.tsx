import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LibraryScreen from '../screens/Library/LibraryScreen';
import HomeNavigator from './HomeNavigator';
import {routes} from './routes';
import DownloadsScreen from '../screens/Downloads/DownloadsScreen';
import ProfileScreen from '../screens/Search/ProfileScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theme} from '../constants/THEME';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.color.blueDark,
        tabBarInactiveTintColor: theme.color.greyLight,
      }}>
      <Tab.Screen
        name={routes.HOME}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          title: 'Home',
        }}
      />
      <Tab.Screen
        name={routes.LIBRARY}
        component={LibraryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="th-list" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name={routes.DOWNLOADS}
        component={DownloadsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="download" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
