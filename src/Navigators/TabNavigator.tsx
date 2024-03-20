import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LibraryScreen from '../screens/Library/LibraryScreen';
import HomeNavigator from './HomeNavigator';
import {routes} from './routes';
import DownloadsScreen from '../screens/Downloads/DownloadsScreen';
import ProfileScreen from '../screens/Search/ProfileScreen';
import {theme} from '../constants/THEME';
import BottomTabBar from '../screens/Home/components/BottomTabBar';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.color.blueDark,
        tabBarInactiveTintColor: theme.color.greyLight,
      }}>
      <Tab.Screen name={routes.HOME} component={HomeNavigator} />
      <Tab.Screen name={routes.LIBRARY} component={LibraryScreen} />
      <Tab.Screen name={routes.DOWNLOADS} component={DownloadsScreen} />
      <Tab.Screen name={routes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
