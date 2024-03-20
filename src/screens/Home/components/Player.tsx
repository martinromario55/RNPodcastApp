import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Player = () => {
  return (
    <View style={styles.container}>
      <Text>Player</Text>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#f00',
  },
});
