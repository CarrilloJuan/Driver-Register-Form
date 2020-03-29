import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Text} from 'react-native-elements';

export default function RegisterForm() {
  return (
    <View style={styles.container}>
      <Text>Driver Register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
  },
});
