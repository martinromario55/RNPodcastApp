import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../constants/THEME';

const Header = ({title}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  titleContainer: {
    height: 50,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: theme.text.size.xl,
    color: theme.color.black,
    fontWeight: 'bold',
  },
});
