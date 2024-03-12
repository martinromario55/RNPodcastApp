import {Keyboard, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import PodcastBox from './PodcastBox';

const Search = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <TextInput
          placeholder="Search Podcast"
          style={styles.search}
          placeholderTextColor={'grey'}
        />
      </View>
      <View style={styles.resultsContainer}>
        <PodcastBox />
        <PodcastBox />
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  search: {
    width: '90%',
    height: 50,
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  resultsContainer: {
    margin: 20,
  },
});
