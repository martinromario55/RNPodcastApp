import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IPodcast} from '../constants/types/Podcast';
import {useNavigation} from '@react-navigation/native';

const PodcastBox: React.FC<{podcast: IPodcast}> = ({podcast, titleDesc}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.push('PodcastScreen', {podcast: podcast})}
      style={styles.boxContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: podcast?.artworkUrl600}}
          style={styles.podcastImage}
        />
      </View>
      {titleDesc && (
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{podcast?.collectionName}</Text>
          <Text style={styles.subtitleText}>{podcast?.artistName}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PodcastBox;

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  podcastImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitleText: {
    fontSize: 14,
    marginTop: 10,
  },
});
