import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface KeyboardDismissViewProps {
  withScrollView?: boolean;
}

const KeyboardDismissView: React.FC<KeyboardDismissViewProps> = (
  props: PropsWithChildren<KeyboardDismissViewProps>,
) => {
  if (props.withScrollView) {
    return (
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.container}>
        {props.children}
      </ScrollView>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={Keyboard.dismiss}>
      {props.children}
    </TouchableOpacity>
  );
};

export default KeyboardDismissView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
