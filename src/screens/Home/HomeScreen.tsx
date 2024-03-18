import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Trending from './components/Trending';
import Categories from './components/Categories';
import {itunesApiServices} from '../../services/ItunesApi';
import {IPodcast} from '../../constants/types/Podcast';
import Explore from './components/Explore';

const HomeScreen = () => {
  const [podcasts, setPodcasts] = useState<IPodcast[]>([]);

  useEffect(() => {
    itunesApiServices.searchPodcast('football').then(results => {
      // console.log('Results:', results);
      setPodcasts(results);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Trending podcasts={podcasts} />
      <Categories />
      <Explore podcasts={podcasts} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
});
