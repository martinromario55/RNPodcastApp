import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PodcastBox = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/folder.jpg')}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>Podcast Box</Text>
        <Text style={styles.description} numberOfLines={1}>
          Podcast Box is a podcast app that helps you find the best podcasts to
          listen to.
        </Text>
        <Text style={styles.episodes}>400 episodes</Text>
      </View>
    </View>
  );
};

export default PodcastBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    width: 300,
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#ccc',
  },
  episodes: {
    fontSize: 16,
    color: '#70a5fa',
  },
});
