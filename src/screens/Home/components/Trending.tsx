import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import CardBox from '../../../components/CardBox';

const Trending = () => {
  return (
    <View style={styles.container}>
      <Header title={"Editor's Pick"} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CardBox BGcolor={'#f00'} />
        <CardBox BGcolor={'#f00'} />
        <CardBox BGcolor={'#f00'} />
        <CardBox BGcolor={'#f00'} />
        <CardBox BGcolor={'#f00'} />
        <CardBox BGcolor={'#f00'} />
        <CardBox BGcolor={'#f00'} />
      </ScrollView>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {},
});
