import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import PodcastBox from '../../../components/PodcastBox';

const Trending = ({podcasts}: any) => {
  return (
    <View style={styles.container}>
      <Header title={"Editor's Pick"} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {podcasts?.map((podcast: any) => (
          <PodcastBox podcast={podcast} key={podcast.trackId} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {},
});
