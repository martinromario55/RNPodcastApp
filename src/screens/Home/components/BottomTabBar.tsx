import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Player from './Player';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {routes} from '../../../Navigators/routes';
import {theme} from '../../../constants/THEME';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ICONS = {
  [routes.HOME]: 'home',
  [routes.LIBRARY]: 'th-list',
  [routes.DOWNLOADS]: 'download',
  [routes.PROFILE]: 'user',
};

const BottomTabBar: React.FC<BottomTabBarProps> = props => {
  const tabBarActiveTintColor = theme.color.blueDark;
  const tabBarInactiveTintColor = theme.color.greyLight;

  const onTabPress = (routeName: string, routeIndex: number) => {
    props.navigation.navigate(routeName);
  };

  return (
    <>
      <Player />
      <View style={[styles.container, {height: 50}]}>
        {props.state.routes.map((route, index) => {
          const icon = ICONS[route.name];
          const color =
            props.state.index === index
              ? tabBarActiveTintColor
              : tabBarInactiveTintColor;
          return (
            <TouchableOpacity
              onPress={() => onTabPress(route.name, index)}
              key={route.key}
              style={styles.tabBarStyle}>
              <FontAwesome name={icon} size={30} color={color} />
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBarStyle: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
