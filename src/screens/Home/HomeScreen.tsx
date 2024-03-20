import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Trending from './components/Trending';
import Categories from './components/Categories';
import {itunesApiServices} from '../../services/ItunesApi';
import {IPodcast} from '../../constants/types/Podcast';
import Explore from './components/Explore';
import TrackPlayer, {RepeatMode, State, Track} from 'react-native-track-player';
import {setupPlayer} from '../../services/PlaybackService';

const HomeScreen = () => {
  const [podcasts, setPodcasts] = useState<IPodcast[]>([]);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    itunesApiServices.searchPodcast('football').then(results => {
      // console.log('Results:', results);
      setPodcasts(results);
    });
  }, []);

  // Player Config

  // const playListData: Track[] = [
  //   {
  //     id: 1,
  //     url: 'https://dcs.megaphone.fm/PFFA4391272301.mp3?key=a57c7e0db773db130225656e2138c0e8&request_event_id=7e20685d-c10a-4e44-92e2-0900a5415bcc',
  //     title: 'React Native Tutorial',
  //     artist: '<NAME>',
  //     album: 'React Native Tutorial',
  //     artwork: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  //   },
  // ];

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
