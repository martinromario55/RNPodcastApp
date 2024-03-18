import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {IPodcast} from '../../constants/types/Podcast';
import {feedurlServices} from '../../services/FeedUrlServices';
import {Feed} from 'react-native-rss-parser';
import {theme} from '../../constants/THEME';
import {ScrollView} from 'react-native-gesture-handler';

type PodcastScreenProps = RouteProp<{Podcast: {podcast: IPodcast}}, 'Podcast'>;

const PodcastScreen = () => {
  const {params} = useRoute<PodcastScreenProps>();
  const [podcastItem, setPodcastItem] = useState<Feed | null>(null);

  //   console.log('Params', params);

  useEffect(() => {
    params &&
      feedurlServices.getFeed(params.podcast.feedUrl).then(result => {
        setPodcastItem(result);
      });
  }, [params]);

  //   console.log('Podcast', podcastItem);
  //   console.log('url', params.podcast.feedUrl);

  return (
    <View style={styles.container}>
      {!podcastItem ? (
        <ActivityIndicator color={theme.color.blueDarker} size={'large'} />
      ) : (
        <View>
          <View>
            <Image
              source={{uri: podcastItem.image.url}}
              style={styles.podcastImage}
            />
            <Text style={styles.titleText}>{podcastItem?.title}</Text>
          </View>

          <ScrollView
            style={styles.episodes}
            showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.descText}>{podcastItem?.description}</Text>
            </View>
            <Text style={styles.episodeText}>Episodes</Text>
            <View>
              {podcastItem?.items.map((item: any) => (
                <View key={item.id} style={styles.episodeContainer}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.freepik.com/512/11577/11577825.png?uid=R140239867&ga=GA1.2.491366946.1708176203&',
                    }}
                    style={styles.episodeImage}
                  />
                  <Text style={styles.episodeTitle} numberOfLines={1}>
                    {item?.title}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default PodcastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
    padding: 10,
  },
  podcastImage: {
    height: 200,
    objectFit: 'contain',
  },
  titleText: {
    fontSize: theme.text.size.xl,
    color: theme.color.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  descText: {
    fontSize: theme.text.size.md,
    color: theme.color.black,
    margin: 10,
  },
  episodes: {
    margin: 10,
  },
  episodeContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    gap: 5,
    alignItems: 'center',
  },
  episodeImage: {
    width: 90,
    height: 90,
    borderRadius: 5,
  },
  episodeText: {
    fontSize: theme.text.size.xl,
    color: theme.color.black,
    fontWeight: 'bold',
  },
  episodeTitle: {
    flex: 1,
    fontSize: theme.text.size.md,
    color: theme.color.black,
    paddingVertical: 10,
  },
});
