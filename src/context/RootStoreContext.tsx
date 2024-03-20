import {View, Text} from 'react-native';
import React from 'react';
import RootStore from '../stores/RootStore';

const RootStoreContext = React.createContext<RootStore | null>(null);

const RootStoreProvider: React.FC<{rootStore: RootStore}> = props => (
  <RootStoreContext.Provider value={props.rootStore}>
    {props.children}
  </RootStoreContext.Provider>
);

const useRootSore = () => {
  const store = React.useContext(RootStoreContext);

  if (!store) {
    throw new Error('useRootStore must be used within a RootStoreProvider');
  }
  return store;
};

export {RootStoreContext, RootStoreProvider, useRootSore};
