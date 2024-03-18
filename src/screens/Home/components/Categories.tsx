import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import CardBox from '../../../components/CardBox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Header title={'Categories'} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CardBox shape={'circle'} BGcolor={'#f7c0bc'} text={'Category'}>
          <FontAwesome name="music" size={34} color="red" />
        </CardBox>
        <CardBox shape={'circle'} BGcolor={'#f7c0bc'} text={'Category'}>
          <FontAwesome name="music" size={34} color="red" />
        </CardBox>
        <CardBox shape={'circle'} BGcolor={'#f7c0bc'} text={'Category'}>
          <FontAwesome name="music" size={34} color="red" />
        </CardBox>
        <CardBox shape={'circle'} BGcolor={'#f7c0bc'} text={'Category'}>
          <FontAwesome name="music" size={34} color="red" />
        </CardBox>
        <CardBox shape={'circle'} BGcolor={'#f7c0bc'} text={'Category'}>
          <FontAwesome name="music" size={34} color="red" />
        </CardBox>
        <CardBox shape={'circle'} BGcolor={'#f7c0bc'} text={'Category'}>
          <FontAwesome name="music" size={34} color="red" />
        </CardBox>
        <CardBox shape={'circle'} BGcolor={'#f7c0bc'} text={'Category'}>
          <FontAwesome name="music" size={34} color="red" />
        </CardBox>
        <CardBox shape={'circle'} BGcolor={'#f7c0bc'} text={'Category'}>
          <FontAwesome name="music" size={34} color="red" />
        </CardBox>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
