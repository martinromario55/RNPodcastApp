import {StyleSheet} from 'react-native';
import React from 'react';
import Search from '../../components/Search';
import KeyboardDismissView from '../../components/KeyboardDismissView';

const SearchScreen = () => {
  return (
    <KeyboardDismissView>
      <Search />
    </KeyboardDismissView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
