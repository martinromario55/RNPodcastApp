import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardBox = ({shape, BGcolor, children, text}: any) => {
  return (
    <View>
      <View
        style={[
          styles.Box,
          shape == 'circle' ? {borderRadius: 50} : {borderRadius: 10},
          {backgroundColor: BGcolor},
        ]}>
        {children}
      </View>
      <View>
        <Text style={styles.Text}>{text}</Text>
      </View>
    </View>
  );
};

export default CardBox;

const styles = StyleSheet.create({
  Box: {
    width: 100,
    height: 100,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
});
