import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import PodcastBox from '../../../components/PodcastBox';

const Explore = ({podcasts}: any) => {
  return (
    <View>
      <Header title={'Explore'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {podcasts?.map((podcast: any) => (
          <PodcastBox
            podcast={podcast}
            key={podcast.trackId}
            titleDesc={true}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
