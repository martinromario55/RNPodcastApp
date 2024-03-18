import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Trending from './components/Trending';
import Categories from './components/Categories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Trending />
      <Categories />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 15,
  },
});
